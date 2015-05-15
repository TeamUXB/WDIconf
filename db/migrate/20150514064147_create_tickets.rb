class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.string :registra
      t.integer :talk_id

      t.timestamps null: false
    end
  end
end
