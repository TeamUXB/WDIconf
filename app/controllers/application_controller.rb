class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(:id => session[:user_id]) if session[:user_id]
  end

  def is_admin?
    current_user.access_level_id == 1
  end

  def is_speaker?

  end

  helper_method :current_user, :logged_in?, :is_admin?
end