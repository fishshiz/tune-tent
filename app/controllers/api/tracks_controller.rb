class Api::TracksController < ApplicationController

  def index
    @tracks = Track.select { |track| track.album_id.to_s == params[:album_id] }
    render "api/tracks/index"
  end

  def create
    # album_id = params[:album_id]
    # params[:tracks].each do |track|
    #   @track = Track.new(track)
    @track = Track.new(track_params)
    # @track.album_id = album_id
    if @track.save
      redirect_to api_album_url(params[:track][:album_id]) and return
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :album_id, :audio)
  end
end
