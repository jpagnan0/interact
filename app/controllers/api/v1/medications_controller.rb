class Api::V1::MedicationsController < ApplicationController
  def index
    @medications = Medication.all
    render json: @medications
  end
end
