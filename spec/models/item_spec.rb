# == Schema Information
#
# Table name: items
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  total      :integer          default(0), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'rails_helper'

RSpec.describe Item, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
