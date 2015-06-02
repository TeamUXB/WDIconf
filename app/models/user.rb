class User < ActiveRecord::Base

  has_one :speaker
  belongs_to :access_level
  #has_secure_password

  attr_accessor :password, :password_confirmation
  before_save :encrypt_password

  # Email validation
  validates :email, :presence => true, :uniqueness => true
  validates_format_of :email, :with => /@/

  # # Password validation
  validates :password, confirmation: true
  # validates_presence_of :password, :on => :create

  def self.authenticate(email, password)
    user = User.find_by(:email => email) || User.find_by(:username => email)
    if user && user.password_digest == BCrypt::Engine.hash_secret(password, user.password_salt)
      user
    else
      login_path
    end
  end


  def encrypt_password

    if password.present?
      self.password_salt   = BCrypt::Engine.generate_salt
      self.password_digest = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
end
