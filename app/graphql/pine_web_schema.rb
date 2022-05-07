class SampleAppSchema < GraphQL::Schema
  class NotLoggedInError < StandardError; end
  class NotAllowedError < StandardError; end

  mutation(Types::MutationType)
  query(Types::QueryType)

  # Union and Interface Resolution
  def self.resolve_type(abstract_type, obj, ctx)
    # TODO: Implement this function
    # to return the correct object type for `obj`
    raise(GraphQL::RequiredImplementationMissingError)
  end

  # Relay-style Object Identification:

  # Return a string UUID for `object`
  def self.id_from_object(object, type_definition, query_ctx)
    GraphQL::Schema::UniqueWithinType.encode(type_definition.name, object.id)
  end

  # Given a string UUID, find the object
  def self.object_from_id(id, query_ctx)
    # For example, to decode the UUIDs generated above:
    type_name, item_id = GraphQL::Schema::UniqueWithinType.decode(id)
    Object.const_get(type_name).find(item_id)
  end

  rescue_from(NotLoggedInError) do |err, obj, args, ctx, field|
    raise(GraphQL::ExecutionError, 'Please login first to access this')
  end

  rescue_from(NotAllowedError) do |err, obj, args, ctx, field|
    raise(GraphQL::ExecutionError, 'Not available')
  end
end
