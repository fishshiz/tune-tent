json.partial! "api/users/user", user: @user
@albums.each do |album|
  json.partial! 'api/albums/album', album: album
end
