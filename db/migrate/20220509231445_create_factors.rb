class CreateFactors < ActiveRecord::Migration[6.1]
  def change
    create_table :factors do |t|
      t.string :name, null: false
      t.integer :weight, null: false, default: 1
      t.string :description, null: false

      t.timestamps
    end
  end
end
