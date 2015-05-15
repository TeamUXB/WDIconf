class CreateTalks < ActiveRecord::Migration
  def change
    create_table :talks do |t|
      t.string :title
      t.string :blurb
      t.text :description
      t.datetime :date
      t.integer :limit

      t.timestamps null: false
    end
  end
end
