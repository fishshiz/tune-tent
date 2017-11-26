Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resources :albums, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
