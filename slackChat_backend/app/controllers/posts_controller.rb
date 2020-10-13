class PostsController < ApplicationController
  def index 
    @posts = Post.all
    render json: @posts
  end

  # before_action :authorized, only: [:create]

  def create
    user = User.find_by(id:params[:user_id])
    @post = Post.create(content:posts_params[:content], timestamp:posts_params[:timestamp], user_id:user.id, channel_id:posts_params[:channel_id])
    render json: @post
  end

  def update
    @post = Post.find(params[:id])
    @post.update(content:posts_params[:content])
    render json: @post
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    @posts = Post.all
    render json: @posts
  end

  private 

  def posts_params
      params.permit(:content, :timestamp, :user_id, :channel_id)
  end
end
