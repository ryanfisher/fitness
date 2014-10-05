require 'spec_helper'

describe RootController, type: :controller do

  describe 'GET index' do
    before { get :index }

    it 'returns http success' do
      expect(response).to be_success
    end
  end

end
