class UsersController < ApplicationController

  def index
    @users = User.all(:include => :lines)
  end

  def show_file
    user = User.find(params[:id])
    @lines = Line.find_all_by_user_id(user.id)
  end

end
