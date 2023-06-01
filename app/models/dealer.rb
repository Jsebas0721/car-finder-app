class Dealer < ApplicationRecord
    has_many :cars

    validates :name, :location, presence: true
end
