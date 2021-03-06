class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :img_url
      t.text :bio
      t.string :genre
      t.string :fb_link
      t.string :twitter_link
      t.string :soundcloud_link
      t.string :web_link

      t.timestamps
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
