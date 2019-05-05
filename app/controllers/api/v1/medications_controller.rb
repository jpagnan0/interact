class Api::V1::MedicationsController < ApiController
  def index
    @medications = Medication.all
    render json: @medications
  end
end
