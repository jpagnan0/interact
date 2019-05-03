Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :auth
      resources :users
      resources :user_medications
      resources :search
      resources :medications
      resources :interactions
      # resources :users #, only: [:create]
      get '/current_medications', to: 'users#current_user_medications'
      get '/current_interactions', to: 'users#current_user_interactions'
      # get '/user/:id', to: 'users#current_user_medications'
      get '/user_interactions/:id', to: 'interactions#user_interactions'
      # post '/login', to: 'auth#create'
      # get '/current_user', to: 'auth#get_current_user'
      # get '/dashboard', to: 'users#dashboard'
    end
  end
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  !request.xhr? && request.format.html?
  end
end
