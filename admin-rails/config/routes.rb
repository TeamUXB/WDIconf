Rails.application.routes.draw do


  # ------ Users routes ------
    # resources :users
    get   '/users/'               => 'users#index',   :as=>'users_home'
    get   '/users/all'            => 'users#all',     :as=>'users_all'
    get   '/users/signup'         => 'users#new',     :as=>'user_signup'
    post  '/users/signup'         => 'users#create'
    get   '/users/:id/profile'    => 'users#profile', :as=> 'user_profile'
    get   '/users/:id/edit'       => 'users#edit',    :as=> 'user_edit'
    put   '/users/:id/edit'       => 'users#update',  :as=> 'user_update'
    #delete '/user/delete/:id'     => 'user#destroy',  :as=> 'user_delete'
  # --------------------------

  # ------ Authentication routes ------
    get   '/login'             => 'session#new',      :as => 'login'
    post  '/login'             => 'session#create'
    delete   '/logout'            => 'session#destroy',   :as => 'logout'
  # --------------------------

  get 'pages/index'
  get 'pages/about'

   get   '/'                  => 'pages#index',      :as => 'root'
end
