class CarsController < ApplicationController
    skip_before_action :authorized
    def index
        cars = Car.all 
        render json: cars
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
        params.permit(:id, :make, :year, :color, :image, :mileage, :price)
    end

end
