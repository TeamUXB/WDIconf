class CreateSpeakers < ActiveRecord::Migration
  def change
    create_table :speakers do |t|
      t.integer :user_id
      t.integer :talk_id
      t.string :name
      t.string :blurb

      t.timestamps null: false
    end
  end
end
