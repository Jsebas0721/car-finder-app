class DealerSerializer < ActiveModel::Serializer
  attributes :id, :name, :logo, :location

  has_many :cars
end
