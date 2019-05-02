class Api::V1::UsersController < ApplicationController
  # skip_before_action :authorized, only: [:create]
  before_action :current_user_interactions, only: [:create, :get_user_interactions]

  attr_reader :user
  def dashboard
    render json: { user: UserSerializer.new(current_user) }, status: :accepted
  end

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else
      render json: { error: 'something went wrong!' }, status: :not_acceptable
    end
  end #end create method

  def get_user_interactions
    GetUserInteractions.new(current_user).execute
  end
  def current_user_medications
    # binding.pry
    # @user_meds = UserMedication.find_by(user_id: user_med_params[:id]).medications
    # render json: { medications: @user_meds }
    render json: current_user.medications
    # render json: { UserSerializer.mew(@user_meds) }
  end
  def current_user_interactions
    # binding.pry
    # @user_meds = UserMedication.find_by(user_id: user_med_params[:id]).medications
    # render json: { medications: @user_meds }
    GetUserInteractions.new(current_user).execute

    render json: current_user.interactions
    # render json: { UserSerializer.mew(@user_meds) }
  end

  private
  def user_params
    params.require(:user).permit(:name, :username, :password )
  end
end #end UsersController
