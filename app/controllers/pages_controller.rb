class PagesController < ApplicationController
  rescue_from ActionController::UnknownFormat, :with => :catch_unknown_format

  # Routes pages to React frontend
  def index
  end

  def catch_unknown_format(exception)
    head :not_acceptable
  end
end
