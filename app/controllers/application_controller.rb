class ApplicationController < ActionController::API
  # before_action :authorized
  def encode_token(user_id)
    JWT.encode(user_id, ENV["hmac_secret"])
  end

  def auth_header
    request.headers["Authorization"]
  end

  # def decode_token(token)
  #   JWT.decode(token, ENV["hmac_secret"])[0]
  # end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1] # headers: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, ENV["hmac_secret"], true, algorithm: 'HS256') # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
    end
    @user = User.find_by(id: user_id)
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: { message: 'Sign Up or Login to access dashboard'} #, status: :unauthorized unless logged_in?
  end

end
