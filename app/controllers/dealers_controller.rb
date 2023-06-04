class DealersController < ApplicationController

    skip_before_action :authorized, only: [:index] 
    def index
        dealers = Dealer.all 
        render json: dealers
    end

    def create
        dealer = Dealer.create(dealer_params)
        if dealer.valid?
            render json: dealer, status: :created
        else
            render json: { errors: dealer.errors.full_messages },  status: :unprocessable_entity
        end
    end


    private 
    
    def dealer_params
        params.permit(:name, :logo, :location)
    end
    
end
