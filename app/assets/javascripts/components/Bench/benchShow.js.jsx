var BenchShow = React.createClass({
  getInitialState: function() {
    return { bench: {} };
  },

  componentDidMount: function() {
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
    // this.bench = this.props.location.query;
    return (
      <div>
        Description: {this.state.bench.description}
        <br/>
        Latitude: {this.state.bench.lat}
        <br/>
        Longitude: {this.state.bench.lng}
        <br/>
        Seats: {this.state.bench.seating}
      </div>
    );
  }
});
