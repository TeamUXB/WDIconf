class AddDurationToTalks < ActiveRecord::Migration
  def change
    add_column :talks, :duration, :int
  end
end
