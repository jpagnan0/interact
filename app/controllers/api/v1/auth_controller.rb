class Api::V1::AuthController < ApiController
  # skip_before_action :authorized, only: [:create]
  def create
    @user = User.find_by(username: user_login_params[:username])
    if @user && @user.authenticate(user_login_params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: token }  #, status: :accepted
    else
      render json: { message: 'Invalid username or password' } #, status: :unauthorized
    end
  end

  def get_current_user

    if current_user
      render json: current_user
    else
      render json: { errors: "No user" }
    end

  end

  private

  def user_login_params
    params.require(:user).permit(:username, :password)
  end
end
