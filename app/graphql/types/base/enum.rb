class Types::Base::Enum < GraphQL::Schema::Enum
  class << self
    def build_from_hash(hash)
      hash.map { |name, val| value(name, val) }
    end

    def build_from_array(array)
      array.map{ |item| value(item, item) }
    end
  end
end
