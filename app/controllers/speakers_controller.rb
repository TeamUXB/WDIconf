class SpeakersController < ApplicationController

  def index
    @speakers = Speaker.all
  end

  def create
    @speaker = Speaker.new(speaker_params)

    if @speaker.save
      redirect_to "/speakers/#{@speaker.id}"
    else
      render :new
    end
  end

  def new
    @speaker = Speaker.new
  end

  def edit
    @speaker = Speaker.find(params[:id])
  end

  def show
    @speaker = Speaker.find(params[:id])
    @talks = Talk.where(speaker_id: params[:id])
  end

  def update
    @speaker = Speaker.find(params[:id])
    if @speaker.update(speaker_params)
      redirect_to speaker_path
    else
      render :edit
    end
  end

  def destroy
    @speaker = Speaker.find(params[:id])
    @speaker.destroy
    redirect_to speakers_path
  end

  def speaker_params
    binding.pry
    params.require(:speaker).permit(:name, :blurb, :image, :remote_image_url)
  end

end
