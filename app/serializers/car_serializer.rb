class CarSerializer < ActiveModel::Serializer
  attributes :id, :make, :year, :image, :mileage, :price, :user_id, :dealer_id

end
