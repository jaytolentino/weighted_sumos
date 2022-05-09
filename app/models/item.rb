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
class Item < ActiveRecord::Base
end
