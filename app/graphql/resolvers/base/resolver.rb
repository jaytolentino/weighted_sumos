class Resolvers::Base::Resolver < GraphQL::Schema::Resolver
  argument_class Types::Base::Argument

  def current_user
    context[:current_user]
  end

  def viewed_user
    context[:viewed_user] || context[:current_user]
  end
end