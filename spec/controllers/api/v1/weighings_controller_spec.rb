require 'spec_helper'

describe Api::V1::WeighingsController do
  describe 'GET index' do
    before do
      get :index, format: :json
    end
  end
end
