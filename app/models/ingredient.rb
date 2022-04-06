class Ingredient < ApplicationRecord
  include PgSearch::Model
  pg_search_scope :search_description,
                  against: :description
                  # using: { tsearch: { dictionary: 'english' } }

  has_many :ingredients_recipes
  has_many :recipes, through: :ingredients_recipes

  def self.search_most_relevant_ids(query)
    Ingredient.search_description(query).limit(10).pluck(:id)
  end
end