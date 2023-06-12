class DealerSerializer < ActiveModel::Serializer
  attributes :id, :name, :logo, :location

  has_many :cars
  has_many :users, through: :cars
end
