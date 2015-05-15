Rails.application.routes.draw do

  get 'pages/index'
  get 'pages/about'



  get   '/'                  => 'pages#index',      :as => 'root'
end
