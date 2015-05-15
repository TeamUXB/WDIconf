class RenameColumn < ActiveRecord::Migration
  def change
    rename_column :access_levels, :type, :access_type
  end
end
