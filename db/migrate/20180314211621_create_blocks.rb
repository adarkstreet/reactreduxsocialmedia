class CreateBlocks < ActiveRecord::Migration[5.1]
  def change
    create_table :blocks do |t|
      t.string :name
      t.string :location
      t.string :post

      t.timestamps
    end
  end
end
