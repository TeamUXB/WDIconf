class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.integer :access_level
      t.string :email
      t.integer :login_type

      t.timestamps null: false
    end
  end
end
