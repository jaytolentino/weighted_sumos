module Types::NodeType
  include Types::Base::Interface
  # Add the `id` field
  include GraphQL::Types::Relay::NodeBehaviors
end
