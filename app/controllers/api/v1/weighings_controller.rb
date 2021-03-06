class Api::V1::WeighingsController < ApplicationController
  respond_to :json

  def index
    respond_with Weighing.all
  end

  def show
    respond_with Weighing.find(params[:id])
  end

  def create
    Weighing.create(weighing)
    head :ok
  end

private

  def weighing
    params.fetch(:weighing).merge(:date => Date.today)
  end

end
