source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails', branch: 'main'
gem 'rails', '~> 6.1.4'
gem 'pg', '~> 1.1' # Use postgresql as the database for Active Record
gem 'puma', '~> 5.6' # Use Puma as the app server
gem 'sass-rails', '>= 6' # Use SCSS for asset stylesheets
gem 'webpacker', '~> 5.4' # Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'jbuilder', '~> 2.7' # Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'bcrypt', '~> 3.1.7' # Use Active Model has_secure_password
gem 'rack-cors'
gem 'faker' # Fake data for demos or examples
gem 'graphql' # GraphQL API
gem 'apollo_upload_server' # File upload via GraphQL
gem 'figaro' # Environment variables
gem 'haml' # HAML templates
gem "haml-rails", "~> 2.0"
gem 'premailer-rails' # Email styling support
gem 'flipper' # Feature flags
gem 'flipper-active_record' # Active record adapter for Flipper
gem 'rollbar' # Exception monitoring
gem 'countries' # Country information
gem 'money-rails', '~>1.12' # Handling money
gem 'aws-sdk-s3', require: false # File storage
gem 'bootsnap', '>= 1.4.4', require: false # Reduces boot times through caching; required in config/boot.rb

# gem 'redis', '~> 4.0' # Use Redis adapter to run Action Cable in production
# gem 'image_processing', '~> 1.2' # Use Active Storage variant

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails', '~> 4.0.2'
  gem 'factory_bot_rails'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 4.1.0'
  # Display performance information such as SQL time and flame graphs for each request in your browser.
  # Can be configured to work on production as well see: https://github.com/MiniProfiler/rack-mini-profiler/blob/master/README.md
  gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen', '~> 3.3'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'annotate' # Annotate models
  gem 'graphiql-rails' # Visualize GraphQL
end

group :test do
  gem 'shoulda-matchers'
  gem 'database_cleaner'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
