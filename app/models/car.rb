class Car < ApplicationRecord
    belongs_to :dealer
    belongs_to :user

    validates :make, :year, :color, :mileage, :price, presence: true
end
