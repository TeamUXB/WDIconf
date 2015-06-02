class AddSpeakerIdToTalks < ActiveRecord::Migration
  def change
    add_column :talks, :speaker_id, :int
  end
end
