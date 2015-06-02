class RenameUsersAccessLevelToAccessLevelId < ActiveRecord::Migration
  def change
    rename_column :users, :access_level, :access_level_id
  end
end
