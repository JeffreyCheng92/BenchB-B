var BenchMap = React.createClass({
  mixins: [ReactRouter.History],

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
    this.map.addListener('click', this._onClick);
  },

  componentDidUpdate: function () {
    this.map.setCenter({lat: this.props.center.lat,
                        lng: this.props.center.lng});
  },

  componentWillUnmount: function() {
    BenchStore.removeChangeListener(this._onChange);
    google.maps.event.clearInstanceListeners(this.map);
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
    ApiUtil.addParam({bounds: bounds});
  },

  _onClick: function(event) {
    var loc = event.latLng;
    var coords = { lat: loc.lat(), lng: loc.lng() };
    this.history.pushState(null, "benches/new", coords);
  },

  placeMarkers: function() {
    if (this.markers) {
      this.resetMarkers();
    }

    var marker;

    this.state.benches.forEach(function(bench) {
      marker = new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        title: bench.description,
        url: 'benches/' + bench.id
      });
      this.markers.push(marker);
      marker.setMap(this.map);
    }.bind(this));

    this.markers.forEach(function(mark) {
      mark.addListener('click', function(){
        this.history.pushState(null, mark.url);
      }.bind(this));
    }.bind(this));
  },

  resetMarkers: function() {
    this.markers.forEach(function(marker, idx){
      marker.setMap(null);
    });
    this.markers = [];
  },

  render: function() {
    if (this.markers) {
      this.placeMarkers();
    }
    return(
      <div className="map" ref="map"></div>
    );
  }

});
