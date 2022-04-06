# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'json'

json_path = Rails.root.join('db', 'recipes-en.json')
raw=File.read(json_path)
recipes_data=JSON.parse(raw)

ingredient_cache = {}

reused = 0
created = 0

puts "[#{Time.now.iso8601}] Started."

for recipe_data in recipes_data do
  recipe = Recipe.create(recipe_data.except('ingredients'))

  for ingredient_data in recipe_data['ingredients'] do 
    ingredient_id = if ingredient_cache[ingredient_data] == nil then
      ingredient = Ingredient.create(description: ingredient_data)
      ingredient_cache[ingredient_data] = ingredient.id
    else
      reused += 1
      ingredient_cache[ingredient_data]
    end 
    IngredientsRecipe.create(recipe_id: recipe.id, ingredient_id: ingredient_id)
  end
  created += 1
  puts "[#{Time.now.iso8601}] reused: #{reused} created: #{created}" if (created % 100 == 0)
end

puts "[#{Time.now.iso8601}] Finished. reused: #{reused} created: #{created}"