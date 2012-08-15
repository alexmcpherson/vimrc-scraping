class User < ActiveRecord::Base
  attr_accessible :handle
  has_many :lines
end
