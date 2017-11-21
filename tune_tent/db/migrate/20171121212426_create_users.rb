class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :session_token
      t.string :img_url
      t.text :bio
      t.string :genre
      t.string :fb_link
      t.string :twitter_link
      t.string :soundcloud_link
      t.string :web_link

      t.timestamps
    end
  end
end
