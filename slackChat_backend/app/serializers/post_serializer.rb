class PostSerializer < ActiveModel::Serializer
  attributes :id, :content, :timestamp
  belongs_to :user
  belongs_to :channel
end
