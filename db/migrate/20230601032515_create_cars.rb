class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :make
      t.integer :year
      t.string :color
      t.string :image
      t.integer :mileage
      t.integer :price
      t.integer :user_id
      t.integer :dealer_id

      t.timestamps
    end
  end
end
