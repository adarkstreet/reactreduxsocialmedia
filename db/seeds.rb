25.times do
  Block.create(
    name: Faker::RickAndMorty.character,
    location: Faker::RickAndMorty.location,
    post: Faker::RickAndMorty.quote
  )
end