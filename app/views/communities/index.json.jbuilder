json.array!(@communities) do |community|
  json.extract! community, :id, :name, :description, :image_url
  json.url community_url(community, format: :json)
end
