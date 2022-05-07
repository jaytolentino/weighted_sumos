class GraphqlController < ApplicationController
  # If accessing from outside this domain, nullify the session
  # This allows for outside API access while preventing CSRF attacks,
  # but you'll have to authenticate your user separately
  # protect_from_forgery with: :null_session

  def execute
    variables = prepare_variables(params[:variables])
    query = params[:query]
    operation_name = params[:operationName]
    context = {
      session: session,
      current_user: current_user,
      viewed_user: viewed_user,
    }
    result = SampleAppSchema.execute(
      query,
      variables: variables,
      context: context,
      operation_name: operation_name,
    )
    render json: result
  rescue => e
    raise e unless Rails.env.development?
    handle_error_in_development e
  end

  private

  # Gets current user from token stored in the session
  def current_user
    return if session[:token].blank?

    token = Auth::TokenService.decode(session[:token])
    user_id = token[:user_id].to_i

    User.find(user_id)
  rescue ActiveSupport::MessageVerifier::InvalidSignature
    nil
  rescue Auth::TokenExpired
    session[:token] = nil

    nil
  end

  # Gets the viewed user from token stored in the session
  def viewed_user
    return if session[:token].blank?

    token = Auth::TokenService.decode(session[:token])

    # If the current user is not viewing another user, then the viewed user is
    # set to the current user
    return current_user if !token.key?(:viewed_user_id)

    viewed_user_id = token[:viewed_user_id].to_i
    User.find(viewed_user_id)
  end

  # Handle variables in form data, JSON body, or a blank value
  def prepare_variables(variables_param)
    case variables_param
    when String
      if variables_param.present?
        JSON.parse(variables_param) || {}
      else
        {}
      end
    when Hash
      variables_param
    when ActionController::Parameters
      # GraphQL-Ruby will validate name and type of incoming variables.
      variables_param.to_unsafe_hash
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{variables_param}"
    end
  end

  def handle_error_in_development(e)
    logger.error e.message
    logger.error e.backtrace.join("\n")

    render(
      json: {
        errors: [{ message: e.message, backtrace: e.backtrace }],
        data: {},
      },
      status: 500
    )
  end
end
