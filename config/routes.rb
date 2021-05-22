Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :postits, only: [ :index, :show, :create, :update ] do
        member do
          patch '/upvote' => 'postits#upvote'
        end
      end
    end
  end 
end
