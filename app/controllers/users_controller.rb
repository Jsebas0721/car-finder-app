class UsersController < ApplicationController

    skip_before_action :authorized, only: [:create]
    before_action :permitted, only: [:create]
    def index
        users = User.all 
        render json: users
    end

    def show
        render json: current_user
    end
    
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    
    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
