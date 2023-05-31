class Dealer < ApplicationRecord

    validates :name, :location, presence: true
end
