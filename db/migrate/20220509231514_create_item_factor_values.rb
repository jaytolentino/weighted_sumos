class CreateItemFactorValues < ActiveRecord::Migration[6.1]
  def change
    create_table :item_factor_values do |t|
      t.references :item, foreign_key: true
      t.references :factor, foreign_key: true
      t.integer :value, null: false, default: 1

      t.timestamps
    end
  end
end
