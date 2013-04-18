Fitness::Application.routes.draw do
  root :to => 'root#index'

  namespace :api do
    namespace :v1 do
      resources :weighings
    end
  end
end
