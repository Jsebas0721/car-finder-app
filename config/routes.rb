Rails.application.routes.draw do
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  
  #sessions routes
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  #users routes
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  get "/users", to: "users#index"
  
  #dealers routes
  get "/dealers", to: "dealers#index"
  post "/dealers", to: "dealers#create"

  
  #cars routes
  resources :cars, only: [:index, :create, :update, :destroy]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
