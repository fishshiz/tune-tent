class Api::AlbumsController < ApplicationController
  def new
    @album = Album.new
  end

  def create
    @album = Album.new(album_params)
    if @album.save
      render "api/albums/show"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def index
    @albums = Album.select { |album| album.user_id == params[:user_id] }
    render :index
  end

  def show
    @album = Album.find(params[:id])
  end

  private
  
  def album_params
    params.require(:album).permit(:title, :album_img_url, :user_id)
  end

end
