class Recipe < ApplicationRecord
  has_many :ingredients_recipes
  has_many :ingredients, through: :ingredients_recipes

  def self.search_by(queries)
    ingredient_ids = queries.map { |query| Ingredient.search_most_relevant_ids(query) }
    pp ingredient_ids
    result = Recipe.select(:id, 'recipes.title as title', 'COUNT(recipes.id) as relevance')
      .joins('INNER JOIN ingredients_recipes AS ir ON recipes.id = ir.recipe_id')
      .joins('INNER JOIN ingredients as i ON i.id = ir.ingredient_id')
      .group('recipes.id')
      .order('relevance DESC')
      .where('i.id IN (?)', ingredient_ids.flatten)
      .limit(20)
  end

end