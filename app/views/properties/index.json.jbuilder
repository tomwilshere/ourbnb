json.array!(@properties) do |property|
  json.extract! property, :id, :name, :description, :lat, :lon, :image_urls, :price_per_night, :terms, :user_id, :community_id
  json.url property_url(property, format: :json)
end
