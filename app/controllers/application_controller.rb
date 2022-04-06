class ApplicationController < ActionController::Base
  def index
    respond_to :html
    render html: '', layout: true
  end
end
