class CarSerializer < ActiveModel::Serializer
  attributes :id, :make, :year, :color, :image, :mileage, :price, :user_id, :dealer_id
  
end
