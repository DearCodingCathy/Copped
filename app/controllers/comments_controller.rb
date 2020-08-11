class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]


  # GET /comments
  def index
    @post = Post.find(params[:post_id])
    @comments = Comment.where(post_id: @post.id)

    render json: @comments, include: {post: {include: :user}}, status: :ok
  end

  # GET /comments/1
  def show
    render json: @comment
  end

  # POST /comments
  def create
    @post = Post.find(params[:post_id])
    @comment = Comment.where(post_id: @post.id).new(comment_params)

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @post = Post.find(params[:post_id])
      @comment = Comment.where(post_id: @post.id).find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:content, :user_id, :post_id)
    end
end
