class UserNotifier < ApplicationMailer
  default :from => 'teamuxb@gmail.com'

  # def send_signup_email(user)
  #   @user = user
  #   mail( :to      => @user.email,
  #         :subject => 'omg such wow')
  # end

  def send_contact_email(params)
    @params = params

    @name = params[:name]
    @email = params[:email]
    @message = params[:message]

    mail( :to      => @email,
          :subject => 'WDIConf: Automated reply')

  end

  def send_payment_email(params)
    @params = params

    @first_name = params["first_name"]
    @surname = params["surname"]
    @email = params["email"]
    @full_name = params["full_name"]
    @card_number = params["card_number"]
    @card_month = params["card_month"]
    @card_ccv = params["card_ccv"]

    mail( :to      => @email,
          :subject => 'WDIConf: Payment Confirmation')

  end

end


