class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      t.string :name
      t.text :description
      t.string :lat
      t.string :lon
      t.string :image_urls
      t.decimal :price_per_night
      t.text :terms
      t.references :user, index: true, foreign_key: true
      t.references :community, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
