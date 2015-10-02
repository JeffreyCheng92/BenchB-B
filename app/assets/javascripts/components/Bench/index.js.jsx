var BenchIndex = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function() {
    BenchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    BenchStore.removeChangeListener();
  },

  _onChange: function() {
    this.setState( { benches: BenchStore.all() });
  },

  render: function(){
    return (
      <div>
        {
          this.state.benches.map(function(bench) {
            return (<div> {bench.description} </div>)
          })
        }
      </div>
    );
  },



});
