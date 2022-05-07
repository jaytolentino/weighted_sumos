class ApplicationController < ActionController::Base
  include ActiveStorage::SetCurrent

  skip_before_action :verify_authenticity_token
end
