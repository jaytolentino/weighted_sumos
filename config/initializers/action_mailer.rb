if Rails.env.production?
  ActionMailer::Base.smtp_settings = {
    :domain         => 'http://127.0.0.1:3000',
    :authentication => :plain,
  }
  ActionMailer::Base.delivery_method = :smtp
end