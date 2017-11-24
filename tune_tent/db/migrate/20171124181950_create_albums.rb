class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :album_img_url, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
