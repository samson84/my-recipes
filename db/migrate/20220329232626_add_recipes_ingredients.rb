class AddRecipesIngredients < ActiveRecord::Migration[7.0]
  def change
    create_join_table :recipes, :ingredients do |t|
      t.index :recipe_id
      t.index :ingredient_id
      t.string :unit
      t.string :amount
      t.string :comment
    end
  end
end