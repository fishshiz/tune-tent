json.partial! "api/users/user", user: @user
json.albums @user.albums.each do |album|
  json.partial! 'api/albums/album', album: album
end
