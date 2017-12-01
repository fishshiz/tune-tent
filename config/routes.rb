Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :albums, only: [:index]
    end
    resources :albums, only: [:create, :show] do
      resources :tracks, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :music_searches, only: [:index] do
      get "songs_by_artist", on: :collection
      get "songs_by_album", on: :collection
    end
    resources :upload, only: [:create] do
      post "payload_request", on: :collection
    end
  end

  root "static_pages#root"
end
