var IndexItem = React.createClass({
  mixins: [ReactRouter.History],

  _clickHandler: function() {
    var id = this.props.bench.id;
    debugger
    // this.history.pushState(null, "benches/" + id, coords);
  },

  render: function() {
    var bench = this.props.bench;

    return (
      <div onClick={this._clickHandler}>
        {bench.description}, Seats: {bench.seating}
      </div>
    );
  }
});
