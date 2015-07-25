class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.references :property, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true
      t.date :start_date
      t.date :end_date
      t.text :notes

      t.timestamps null: false
    end
  end
end
