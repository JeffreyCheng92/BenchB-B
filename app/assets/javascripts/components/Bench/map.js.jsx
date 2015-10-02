var BenchMap = React.createClass({

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.map);
    var mapOptions = {
      center: {lat: 37.7538, lng: -122.435},
      zoom: 12
    };
    this.map = new google.maps.Map(map, mapOptions);
  },

  render: function() {
    return(
      <div className="map" ref="map"></div>
    );
  }

});
