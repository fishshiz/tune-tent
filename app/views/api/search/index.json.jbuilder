@users.each do |user|
  json.set! user.id do
    json.set! :type, 'user'
    json.partial! 'api/users/user', user: user
  end
end

@tracks.each do |track|
  json.set! track.id do
    json.set! :type, 'track'
    json.partial! 'api/tracks/track', track: track
  end
end
