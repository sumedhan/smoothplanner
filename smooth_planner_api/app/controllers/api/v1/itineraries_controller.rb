module Api::V1
  class ItinerariesController < ApplicationController
    def index
      @itineraries = Itinerary.all
      render json: @itineraries
    end

    def show
      @itinerary = Itinerary.find(params[:id])
      @items = @itinerary.items.order(time_start: :desc)
      render json: @items
    end
  end
end
