class ChangeValidationFromAlbums < ActiveRecord::Migration[5.1]
  def change
    remove_column :albums, :album_img_url, :string, null: false
    add_column :albums, :album_img_url, :string
  end
end
