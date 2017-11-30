class Api::TracksController < ApplicationController

  def index
    @tracks = Track.select { |track| track.album_id.to_s == params[:album_id] }
    render "api/tracks/index"
  end

  def create
    # album_id = params[:album_id]
    # params[:tracks].each do |track|
    #   @track = Track.new(track)
    #   @track.album_id = album_id
    @track = Track.new(track_params)
    if @track.save
      render json: @track
    else
      render json: @track.errors.full_messages, status: 422
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :album_id, :audio)
  end
end
