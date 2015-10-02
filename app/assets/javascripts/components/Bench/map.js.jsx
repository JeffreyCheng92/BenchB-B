var BenchMap = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function(){
    this.markers = [];

    BenchStore.addChangeListener(this._onChange);

    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7538, lng: -122.435},
      zoom: 12
    };
    this.map = new google.maps.Map(map, mapOptions);
    this.map.addListener('idle', this._onIdle);
  },

  _onChange: function() {
    this.setState( { benches: BenchStore.all() });
  },

  _onIdle: function(event) {
    var raw_bounds = this.map.getBounds();
    var bounds = { "northEast" : { "lat" : raw_bounds.Ka.j,
                                    "lng" : raw_bounds.Ga.H},
                   "southWest" : { "lat" : raw_bounds.Ka.H,
                                    "lng" : raw_bounds.Ga.j}};
    ApiUtil.fetchBenches(bounds);
  },

  placeMarkers: function() {
    if (this.markers) {
      this.resetMarkers();
    }

    var marker;

    this.state.benches.forEach(function(bench) {
      marker = new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        title: bench.description
      });
      this.markers.push(marker);
      marker.setMap(this.map);
    }.bind(this));
  },

  resetMarkers: function() {
    this.markers.forEach(function(marker, idx){
      marker.setMap(null);
    });
    this.markers = [];
  },

  render: function() {
    this.placeMarkers();

    return(
      <div className="map" ref="map"></div>
    );
  }

});
