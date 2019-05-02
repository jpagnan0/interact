class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :medications, :interactions
  # has_many :medications
  # has_many :interactions
end
