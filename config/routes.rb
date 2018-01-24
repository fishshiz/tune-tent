Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :albums, only: [:index]
    end
    resources :albums, only: [:create, :show] do
      resources :tracks, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :search, only: [:index] do
      get "tracks_by_artist", on: :collection
    end
    resources :upload, only: [:create] do
      post "payload_request", on: :collection
    end
  end

  root "static_pages#root"
end
