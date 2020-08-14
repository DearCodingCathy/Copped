class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]


  # GET /posts
  def index
    @user = User.find(params[:user_id])
    @posts = Post.where(user_id: @user.id)

    render json: @posts, include: :user, status: :ok
  end

  # GET /posts/1
  def show
    render json: @post
  end

  # POST /posts
  def create
    @user = User.find(params[:user_id])
    @post = Post.where(user_id: @user.id).new(post_params)
    @post.user = @current_user
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  # All Posts
  def all_post
    @post = Post.all
    render json: @post
  end

  # PUT /comments/1/posts/2
  # def add_comment
  #   @post = Post.find(params[:id])
  #   @comment = Comment.find(params[:comment_id])

  #   @post.comments << @comment

  #   render json: @post, include: :comments
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @user = User.find(params[:user_id])
      @post = Post.where(user_id: @user.id).find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:title, :content, :img_url, :location, :user_id)
    end
end
