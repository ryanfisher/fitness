class Api::V1::WeighingsController < ApplicationController
  respond_to :json

  def index
    respond_with Weighing.all
  end

  def show
    respond_with Weighing.find(params[:id])
  end
end
