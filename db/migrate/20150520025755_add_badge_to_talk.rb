class AddBadgeToTalk < ActiveRecord::Migration
  def change
    add_column :talks, :badge, :string
  end
end
