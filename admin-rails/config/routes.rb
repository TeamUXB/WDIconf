Rails.application.routes.draw do

  mount SinatraApi.new => '/api'

  # ------ Users routes ------
    get   '/users/'               => 'users#index',   :as=>'users_home'
    get   '/users/all'            => 'users#all',     :as=>'users_all'
    get   '/users/signup'         => 'users#new',     :as=>'user_signup'
    post  '/users/signup'         => 'users#create'
    get   '/users/:id/profile'    => 'users#profile', :as=> 'user_profile'
    get   '/users/:id/edit'       => 'users#edit',    :as=> 'user_edit'
    put   '/users/:id/edit'       => 'users#update',  :as=> 'user_update'
    #delete '/user/delete/:id'     => 'user#destroy',  :as=> 'user_delete'
  # --------------------------

  # ------ Speakers routes ------
    resources :speakers
  # -----------------------------

  # ------ Talks routes --------
    resources :talks
    get   '/talks/speaker/:id'        => 'talks#new_by_speaker'
    get   '/talks/speaker_talks/:id'  => 'talks#my_talks'
    get   '/talks/api/json'           => 'talks#api'
    #post  '/users/signup'         => 'users#create'
  # ----------------------------

  # ------ Authentication routes ------
    get     '/login'              => 'session#new',       :as => 'login'
    post    '/login'              => 'session#create'
    delete  '/logout'             => 'session#destroy',   :as => 'logout'
  # --------------------------

  # ------ Admin routes ------
  get 'admin/index'             => 'admin#index'  
  get 'admin/about'             => 'admin#about'
  # --------------------------

   get   '/'                  => 'pages#index',      :as => 'root'
end
