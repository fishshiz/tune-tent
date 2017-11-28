@users.each do |user|
  json.set! user.id do
    json.set! :type, 'user'
    json.partial! 'api/users/user', user: user
  end
end

@albums.each do |album|
  json.set! album.id do
    json.set! :type, 'album'
    json.partial! 'api/albums/album', album: album
  end
end

@tracks.each do |track|
  json.set! track.id do
    json.set! :type, 'track'
    json.extract! track, :id, :title, :album_id, track: track
  end
end
