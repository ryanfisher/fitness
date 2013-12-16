class User < ActiveRecord::Base
  attr_accessible :email, :username

  validates :email, :username, :presence => true, :uniqueness => true

  has_many :weighings
end
