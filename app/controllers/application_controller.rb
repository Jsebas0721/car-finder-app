class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorized
  
  def authorized
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def permitted
    return render json: { error: "You are logged in, Please Log out first!" },  status: :unauthorized if session.include? :user_id
  end

  
  def current_user
    User.find_by_id(session[:user_id])
  end

end
