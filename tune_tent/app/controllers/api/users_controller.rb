class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id].to_i)
  end

  def index
    @users = User.all
    render :index
  end

  def update

    @user = User.find_by(id: current_user.id)

    if @user.update_attributes(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
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
    params.require(:user).permit(:id, :username, :password, :image, :bio, :genre, :fb_link, :twitter_link, :soundcloud_link, :web_link)
  end
end
