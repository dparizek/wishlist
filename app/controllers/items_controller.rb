class ItemsController < ApplicationController

  def index
    if current_user
      @items = Item.where(user_id: current_user.id)
    else
      @items = []
    end
    respond_to do |format|
      # format.html { render :index }
      format.json { render json: @items }
    end
  end

  def create
    @item = Item.new(item_params)
    @item.user_id = current_user.id
    if @item.save
      render json: @item.to_json
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    respond_to do |format|
      format.html { redirect_to items_url, notice: 'Item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def share
    @owner = User.where(uid: params[:user_uid])[0]
    @items = Item.where(user_id: @owner.id, is_private?: false)
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render json: @item.to_json
    else
      render json: @item.errors, status: :unprocessable_entity
    end
  end

  private

    def item_params
      params.require(:item).permit(:image_url, :title, :url, :timestamps, :is_private?)
    end

end
