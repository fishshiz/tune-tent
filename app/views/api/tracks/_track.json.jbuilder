json.extract! track, :id, :title, :album_id
json.audio_url asset_path(track.audio.url)