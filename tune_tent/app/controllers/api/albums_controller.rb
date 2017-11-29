class Api::AlbumsController < ApplicationController
  def new
    @album = Album.new
  end

  def create
    debugger
    @album = current_user.albums.new(album_params)
    if @album.save
      render "api/albums/show"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def index
    @albums = Album.select { |album| album.user_id.to_s == params[:user_id] }

    render "api/albums/index"
  end

  def show
    @album = Album.find(params[:id])
  end

  private

  def album_params
    params.require(:album).permit(:id, :title, :album_img_url, :user_id)
  end

end
