class AddIngerdients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :description
    end
  end
end
