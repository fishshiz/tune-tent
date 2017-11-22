class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  private
  def login(user)
    @current_user = user
    session[:session_token] = user.reset_token!
  end

  def logout
    current_user.reset_token
    session[:session_token] = nil
    @current_user = nil
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_login
    unless current_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end
end
