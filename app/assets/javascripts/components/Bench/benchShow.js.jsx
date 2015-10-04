var BenchShow = React.createClass({

  render: function() {
    this.bench = this.props.location.query;
    return (
      <div>
        Description: {this.bench.description}
        <br/>
        Latitude: {this.bench.lat}
        <br/>
        Longitude: {this.bench.lng}
        <br/>
        Seats: {this.bench.seating}
      </div>
    );
  }
});
