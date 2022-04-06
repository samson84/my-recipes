class RecipesController < ApplicationController
  def search
    respond_to :json
    render :json, {:result => 'it works'}
  end

end