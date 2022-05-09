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
FactoryBot.define do
  factory :factor do
    
  end
end
