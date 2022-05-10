class Items::CreateService
  class << self
    def create!(name:)
      raise(ArgumentError, 'Missing name') if name.blank?

      Item.create!(name: name)
    end
  end
end