class Api::V1::PostitsController < ApplicationController
  def index
    @postits = Postit.order(created_at: :desc)
    render json: @postits
  end
  def show
    @postit = Postit.find(params[:id])
    render json: @postit
  end
  def create
    @postit = Postit.create(postit_params)
    render json: @postit
    raise
  end
    
  private
    
  def postit_params
    params.require(:postit).permit(:content, :color)
  end 
end
