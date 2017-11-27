json.partial! 'api/albums/album', album: @album

json.tracks @album.tracks.each do |track|
  json.extract! track, :id, :title, :album_id
end
