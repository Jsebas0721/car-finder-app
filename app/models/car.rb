class Car < ApplicationRecord
    belongs_to :dealer
    belongs_to :user

    validates :make, :year, :color, :image, :mileage, :price, presence: true
end
