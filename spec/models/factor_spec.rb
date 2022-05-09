# == Schema Information
#
# Table name: factors
#
#  id          :bigint           not null, primary key
#  description :string           not null
#  name        :string           not null
#  weight      :integer          default(1), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'rails_helper'

RSpec.describe Factor, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
