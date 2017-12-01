class Api::AlbumsController < ApplicationController
  def new
    @album = Album.new
  end

  def create

    @album = Album.new(album_params)
    if @album.save
      render :show
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
    params.require(:album).permit(:title, :image, :user_id)
  end

end
