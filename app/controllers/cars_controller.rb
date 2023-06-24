class CarsController < ApplicationController
   
    def index
        cars = Car.all 
        render json: cars
    end


    def create
        car = current_user.cars.create(car_params)
        
        if car.valid?
            render json: car, status: :created
        else
            render json: { errors: car.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        car = Car.find_by(id: params[:id])
        if car
            if current_user.id == car.user_id
                car.update(car_params)
                render json: car
            else
                render json: { errors: ["You do not have permissions"]}, status: :unauthorized
            end 
        else
            render json: {error: "Car not found"}, status: :not_found
        end      
    end
    
    def destroy
        car = Car.find_by(id: params[:id])
        if car
            if current_user.id == car.user_id
                car.destroy
                render :no_content
            else
                render json: { errors: ["You do not have permissions"]}, status: :unauthorized
            end
        else
            render json: { error: "Car not found"}, status: :not_found
        end
    end

    private

    def car_params
        params.permit(:id, :make, :year, :color, :image, :mileage, :price, :dealer_id)
    end

   

end
