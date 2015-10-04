class BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])

    if params[:seats]
      min, max = [ params[:seats][0].to_i, params[:seats][1].to_i ]
      @benches = @benches.select { |bench| bench.seating.between?(min, max)}
    end

    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render json: @bench
    else
      render json: @bench.error.full_messages
    end
  end

  def show
    @bench = Bench.find(params[:id])
    render json: @bench
  end

  private

  def bench_params
    params.require(:bench).permit(:lat, :lng, :description, :seating)
  end

end
