json.partial! 'api/albums/album', album: @album
json.set! @album.tracks.each do |track|
  json.extract! track, :id, :title
end
