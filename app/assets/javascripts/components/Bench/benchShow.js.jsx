var BenchShow = React.createClass({
  getInitialState: function() {
    return { bench: {} };
  },

  componentDidMount: function() {
    console.log(this.props.params.id);
    ApiUtil.fetchBench(parseInt(this.props.params.id));
    BenchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BenchStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({ bench: BenchStore.showBench() });
  },

  render: function() {
    var lat = parseFloat(this.state.bench.lat);
    var lng = parseFloat(this.state.bench.lng);
    return (
      <div>
        Description: {this.state.bench.description}
        <br/>
        Latitude: {lat}
        <br/>
        Longitude: {lng}
        <br/>
        Seats: {this.state.bench.seating}
        <br/>
        <BenchMap center={{lat: lat, lng: lng}}/>
      </div>
    );
  }
});
