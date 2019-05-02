class Api::V1::UserMedicationsController < ApplicationController
  # def index
  #   @user_medications = RxNav.search_medication(params[:medication_name])
  #   render json: @search_results
  # end
  def index
    @user_meds = UserMedication.all
    render json: @user_meds
  end
  
  def create
    # byebug
    m=Medication.find_or_create_by({rxcui: params[:rxcui], name: params[:name], name_alt: params[:name_alt]})
    UserMedication.find_or_create_by( medication_id: m.id, user_id: params[:id])
    # binding.pry
    render json: User.find(params[:id]).medications
  end



  # private
  # def user_medications_params
  #   params.permit(:rxcui, :name, :name_alt, :user_id)
  # end
end
