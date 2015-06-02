class SessionController < ApplicationController

  # login form
  def new
    #@referral_url = request.env['HTTP_REFERER']
    if logged_in?
      redirect_to root_path
    end
  end

  def create

    user = User.authenticate(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      render :json => { msg: [0, "You've successfully logged in."]}
      #render "You've successfully logged_in"
    else
      render :json => { msg: [1,"Your email and/or password were invalid. Please try again."]}
    end
    #binding.pry
    # @user = User.find_by(email: params[:email])

    # if @user && @user.authenticate(params[:password])
    #   session[:user_id] = @user.id
    #   # redirect_to root_path
    #   render :json => { msg: [0, "You've successfully logged in."]}
    # else
    #   render :json => { msg: [1,"Your email and/or password were invalid. Please try again."]}
    # end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

end