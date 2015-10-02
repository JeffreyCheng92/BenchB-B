# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :text             not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    # bounds = {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }

    benches = Bench.where("lat >= ? AND lat <= ? AND lng >= ? AND lng <= ?",
                bounds["southWest"]["lat"].to_f,
                bounds["northEast"]["lat"].to_f,
                bounds["southWest"]["lng"].to_f,
                bounds["northEast"]["lng"].to_f )
    return benches
  end
end
