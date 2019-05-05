class Api::V1::SearchController < ApiController
  def index
    @search_results = RxNav.search_medication(params[:medication_name])
    render json: @search_results
  end
  private
  def medication_search_params
    params.permit(:medication_name)
  end
end
