Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      patch '/upvote/:id' => 'postits#upvote'
      patch '/downvote/:id' => 'postits#downvote'
      resources :postits, only: [ :index, :show, :create, :update ] do
        # member do
        #   patch '/upvote/' => 'postits#upvote'
        #   patch '/downvote' => 'postits#downvote'
        # end
      end
    end
  end 
end
