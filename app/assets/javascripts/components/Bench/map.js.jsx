var BenchMap = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function(){
    BenchStore.addChangeListener(this._onChange);

    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7538, lng: -122.435},
      zoom: 12
    };
    this.map = new google.maps.Map(map, mapOptions);
  },

  _onChange: function() {
    this.setState( { benches: BenchStore.all() });
  },

  render: function() {
    var marker;

    this.state.benches.forEach(function(bench) {
      marker = new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        title: bench.description
      });

      marker.setMap(this.map);
    }.bind(this));

    return(
      <div className="map" ref="map"></div>
    );
  }

});
