class Api::V1::InteractionsController < ApplicationController

  def index
    @interactions = Interaction.all
    render json: @interactions
  end


  def user_interactions
    # binding.pry
    user = User.find(params[:id].to_i)
    user_medication_interactions=GetUserInteractions.new(user).execute
    render json: user_medication_interactions
      #
  end

  private

  # def get_interactions(user_meds)
  #   byebug
  #   current_user
  #   res = RestClient.get interactions_url, params: {rxcuis: user_meds.join('+')}
  # end

end
