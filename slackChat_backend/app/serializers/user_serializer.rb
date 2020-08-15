class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :img_url
  has_many :channels
end
