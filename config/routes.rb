Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post '/graphql', to: 'graphql#execute'

  # NOTE: Leave this as the last route in routes.rb
  root 'pages#index'
  match '*path', to: 'pages#index', via: :all
end
