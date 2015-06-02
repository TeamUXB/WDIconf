class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def all
    @users = User.all
    @access_type = AccessLevel.all
  end

  def new
    @user = User.new
    @access_level = AccessLevel.all
  end

  def create
    @user = User.new(get_user_params)
    binding.pry
    @user.save

    if @user.save
      # email user confirmation upon signup
      if Rails.configuration.x.mail_on_user_signup == true
        UserNotifier.send_signup_email(@user).deliver_now
      end
      redirect_to users_all_path
    else
      @errors = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    #@user = get_user_params
    #binding.pry
    if @user.update(get_user_params)
      redirect_to users_all_path
    else
      @errors = @user.errors.full_messages
      render :edit
    end
  end

  def profile
    @user = User.find(params[:id])
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_home
  end

  def get_user_params
    binding.pry
    params.require(:user).permit(:email, :access_level_id, :login_type, :password, :password_confirmation)

  end

end
