class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end


  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render {}
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :img_url, :bio, :genre, :fb_link, :twitter_link, :soundcloud_link, :web_link)
  end
end
