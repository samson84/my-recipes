class RecipesController < ApplicationController
  def search
    ingredient_list = params.require(:query).split(',')
    @search_result = Recipe.search_by(ingredient_list)
  end
end