Fitness::Application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :weighings
    end
  end

  root :to => 'ember#start'
end
