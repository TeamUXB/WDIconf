class RenameSpeakerImageUrlImage < ActiveRecord::Migration
  def change
    rename_column :speakers, :image_url, :image
  end
end
