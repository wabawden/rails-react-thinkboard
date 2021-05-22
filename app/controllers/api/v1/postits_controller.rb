class Api::V1::PostitsController < ApplicationController
  def index
    @postits = Postit.order(upvotes: :desc, created_at: :desc)
    render json: @postits
  end
  def show
    @postit = Postit.find(params[:id])
    render json: @postit
  end
  def create
    @postit = Postit.create(postit_params)
    render json: @postit
  end
  def update
    @postit = Postit.find(params[:id])
    @postit.upvotes += 1
    @postit.save
    render json: @postit
  end
  def downvote
    @postit = Postit.find(params[:id])
    @postit.upvotes -= 1
    @postit.save
    render json: @postit
  end
  private
    
  def postit_params
    params.require(:postit).permit(:content, :color)
  end 
end
