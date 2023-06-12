class Dealer < ApplicationRecord
    has_many :cars
    has_many :users, through: :cars

    validates :name, :logo, :location, presence: true
end
