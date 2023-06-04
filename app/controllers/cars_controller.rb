class CarsController < ApplicationController
    # skip_before_action :authorized, only: [:index]
    def index
        cars = Car.all 
        render json: cars
    end
end
