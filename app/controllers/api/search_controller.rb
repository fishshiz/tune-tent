class Api::SearchController < ApplicationController
  def index
    @users = User.top_five_results(search_params[:query])
    @tracks = Track.top_five_results(search_params[:query])
    render :index
  end

  private
  def search_params
    params.require(:search).permit(:query, :user_id, :album_id)
  end
end
