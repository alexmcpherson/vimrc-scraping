class Line < ActiveRecord::Base
  attr_accessible :contents, :user_id
  belongs_to :user
end
