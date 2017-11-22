class SessionsController < ApplicationController
  def new

  end

  def create
    @user = User.find_by_credentials(
      params[:users][:username], params[:user][:password]
    )

    if @user
      login(@user)
      render "api/session"
    else
      render json: ["Invalid login"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render {}
    else
      render json: ["Must sign in"], status: 404
    end
  end
end
