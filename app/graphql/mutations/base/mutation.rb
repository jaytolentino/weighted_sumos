class Mutations::Base::Mutation < GraphQL::Schema::RelayClassicMutation
  argument_class Types::Base::Argument
  field_class Types::Base::Field
  input_object_class Types::Base::InputObject
  object_class Types::Base::Object

  field :success, Boolean, null: true
  field :errors, [Types::UserError], null: true

  def current_user
    context[:current_user]
  end

  def viewed_user
    context[:viewed_user] || context[:current_user]
  end

  def set_token(token)
    context[:session][:token] = token if context[:session].present?
  end

  def set_current_user(user)
    context[:current_user] = user
    context[:viewed_user] = user
  end

  def clear_session
    context[:session].clear if context[:session].present?
  end

  def model_errors_to_user_errors(model_errors)
    model_errors.errors.map do |error|
      {
        path: ['attributes', error.attribute.to_s.camelize(:lower)],
        message: error.message,
      }
    end
  end

  def err_response(message, **args)
    {
      **args,
      success: false,
      errors: [{ message: message }],
    }
  end
end
