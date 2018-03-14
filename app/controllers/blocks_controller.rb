class BlocksController < blocklicationController
  before_action :set_block, only: [:show, :update, :destroy]

  def index
    render json: block.all.order(created_at: :desc)
  end

  def show
    render json: @block
  end

  def create
    block = block.create(block_params)
    if block.save
      render json: block
    else
      render json: { errors: block.errors.full_messages.join(',') }, status: 422
    end
  end

  def update
    if @block.update(block_params)
      render json: @block
    else
      render json: { errors: @block.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @block.destroy
  end

  private
    def set_block
      @block = block.find(params[:id])
    end

    def block_params
      params.require(:block).permit(:name, :description, :price, :author, :version, :logo, :category, :featured)
    end
end
