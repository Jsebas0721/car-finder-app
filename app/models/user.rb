class User < ApplicationRecord
    has_secure_password

    has_many :cars
    
    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 8}
end
