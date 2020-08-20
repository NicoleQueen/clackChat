class PostsController < ApplicationController
  def index 
    @posts = Post.all
    render json: @posts
  end

  # before_action :authorized, only: [:create]

  def create
    byebug

    @post = Post.create(content:posts_params[:content], emoji:posts_params[:emoji], timestamp:"", user_id:@user.id, channel_id: "")
      # if User.find_by(username:posts_params[:user])
      #     @post = Post.create(content:posts_params[:content], emoji:posts_params[:emoji], timestamp:"", user_id:@user.id, channel_id: "")
      # else 
      #     User.create(username:posts_params[:user])
      #     @post = Post.create(content:posts_params[:content], emoji:posts_params[:emoji], timestamp:"", user_id:@user.id, channel_id: "")
      # end 
      # render json: @post
  end 

  private 

  def posts_params
      params.permit(:id, :content, :emoji, :timestamp, user_id:, channel_id:)
  end
end
