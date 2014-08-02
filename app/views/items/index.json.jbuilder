json.array!(@items) do |item|
  json.extract! item, :id, :image_url, :title, :url, :timestamps
  json.url item_url(item, format: :json)
end
