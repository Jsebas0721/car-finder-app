class Car < ApplicationRecord
    
    belongs_to :dealer

    validates :make, :year, :color, :mileage, :price, presence: true

end
