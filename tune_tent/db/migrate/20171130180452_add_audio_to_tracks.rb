class AddAudioToTracks < ActiveRecord::Migration[5.1]
  def change
    add_column :tracks, :audio, :string, null: false
  end
end
