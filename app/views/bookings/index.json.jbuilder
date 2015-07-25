json.array!(@bookings) do |booking|
  json.extract! booking, :id, :property_id, :user_id, :start_date, :end_date, :notes
  json.url booking_url(booking, format: :json)
end
