Rails.application.routes.draw do

  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/allpost', to: 'posts#all_post'
  
  resources :users do 
    resources :posts do
    resources :comments
    end 
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
