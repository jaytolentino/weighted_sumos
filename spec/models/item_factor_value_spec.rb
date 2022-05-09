# == Schema Information
#
# Table name: item_factor_values
#
#  id         :bigint           not null, primary key
#  value      :integer          default(1), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  factor_id  :bigint
#  item_id    :bigint
#
# Indexes
#
#  index_item_factor_values_on_factor_id  (factor_id)
#  index_item_factor_values_on_item_id    (item_id)
#
# Foreign Keys
#
#  fk_rails_...  (factor_id => factors.id)
#  fk_rails_...  (item_id => items.id)
#
require 'rails_helper'

RSpec.describe ItemFactorValue, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
