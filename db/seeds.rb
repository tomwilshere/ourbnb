user = User.new
user.email = "test@example.com"
user.password = 'test1234'
user.password_confirmation = 'test1234'
user.save!

Community.create!([
  {name: "Snowdonia", description: "Snowdonia National Park", image_url: "http://www.plascochsnowdonia.co.uk/wp-content/uploads/2011/10/snowdonia2.jpg"}
])
Property.create!([
  {name: "Country Farm", description: "A farm in snowdonia ", lat: "53.155740", lon: "-4.041016", image_urls: "http://theselby.com/media/2_17_15_RobertAnnaGeller078-248x372.jpg", price_per_night: "80.0", terms: "Don't rip me off", user_id: 1, community_id: 1},
  {name: "Mountain Lodge", description: "Come and stay with us on the side of Snowdon and join us on a trek to the summit.", lat: "53.068520", lon: "-4.075901", image_urls: "http://theselby.com/wp-content/plugins/magic-fields/thirdparty/phpthumb/phpThumb.php?src=http://theselby.com/wp-content/files_mf/hero7_23_12_pablobronsteinleowebed00542.jpg&w=1026&h=337&zc=1", price_per_night: "130.0", terms: "", user_id: 1, community_id: 1},
  {name: "Forest Retreat", description: "Stay in amongst the trees at our warm and cosy home in the forests of Snowdonia.", price_per_night: "90.0", image_urls: "http://russellsofclapton.com/wp-content/uploads/2015/04/10_reggie-sofa-rm-150x150.jpg", terms: "", user_id: 1, community_id: 1},
  {name: "Hilltop hideaway", description: "Look out over the peaks of Snowdonia and experience the fresh air Wales has to offer.", image_urls: "http://theselby.com/wp-content/plugins/magic-fields/thirdparty/phpthumb/phpThumb.php?src=http://theselby.com/wp-content/files_mf/hero_mg_6687.jpg&w=1026&h=337&zc=1", lat: "53.068520", lon: "-4.075901", price_per_night: "130.0", terms: "", user_id: 1, community_id: 1},
  {name: "Heathland Cottage ", description: "Visit our home perched on the western edge of Snowdonia.", image_urls: "http://theselby.com/media/7_23_12_StephenSHollyW24800.jpg", lat: "53.068520", lon: "-4.075901", price_per_night: "130.0", terms: "", user_id: 1, community_id: 1},
  {name: "Traditional Log Cabin", description: "Our traditional log cabin offers a cosy welcome to hill climbers in Snowdonia", image_urls: "http://theselby.com/media/7_16_12_SueWebsterOBS18288.jpg", lat: "53.068520", lon: "-4.075901", price_per_night: "130.0", terms: "", user_id: 1, community_id: 1},
])
