class Speaker < ActiveRecord::Base
  has_many :talks
  belongs_to :user

  # commented out due to issues integrating with backbone
  # mount_uploader :image, ImageUploader

end
