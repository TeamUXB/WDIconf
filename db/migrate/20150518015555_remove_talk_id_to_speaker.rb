class RemoveTalkIdToSpeaker < ActiveRecord::Migration
  def change
    remove_column :speakers, :talk_id
  end
end
