class CreateAccessLevels < ActiveRecord::Migration
  def change
    create_table :access_levels do |t|
      t.string :type

      t.timestamps null: false
    end
  end
end
