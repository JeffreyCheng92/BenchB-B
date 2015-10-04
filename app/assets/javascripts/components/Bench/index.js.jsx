var BenchIndex = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function() {
    BenchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BenchStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState( { benches: BenchStore.all() });
  },

  render: function(){
    return (
      <div>
        {
          this.state.benches.map(function(bench) {
            return (
              <div key={bench.id}>
                {bench.description}, {bench.seating}
              </div>
            );
          })
        }
      </div>
    );
  },



});
