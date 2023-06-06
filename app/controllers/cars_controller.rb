class CarsController < ApplicationController
    skip_before_action :authorized, only: [:index]
    def index
        cars = Car.all 
        render json: cars
    end


    def create
        car = Car.create(car_params)
        byebug
        if car.valid?
            render json: car, status: :created
        else
            render json: { errors: car.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        car = Car.find_by(id: params[:id])
        if car
            car.update(car_params)
            render json: car
        else
            render json: {error: "Car not found"}, status: :not_found
        end       
    end
    
    def destroy
        car = Car.find_by(id: params[:id])
        if car
            car.destroy
            render :no_content
        else
            render json: { error: "Car not found"}, status: :not_found
        end
    end

    private

    def car_params
        params.permit(:id, :make, :year, :color, :image, :mileage, :price, :dealer_id, :user_id)
    end

end
