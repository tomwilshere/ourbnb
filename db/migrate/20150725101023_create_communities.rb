class CreateCommunities < ActiveRecord::Migration
  def change
    create_table :communities do |t|
      t.string :name
      t.text :description
      t.string :image_url

      t.timestamps null: false
    end
  end
end
