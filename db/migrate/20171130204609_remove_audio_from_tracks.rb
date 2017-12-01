class RemoveAudioFromTracks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tracks, :audio, :string, null: false
  end
end
