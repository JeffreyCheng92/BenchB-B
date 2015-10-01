var BenchIndex = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function() {
    BenchStore.addChangeListener(this._onChange);
    ApiUtil.fetchBenches();
  },

  componentWillUnmount: function() {
    BenchStore.removeChangeListener();
  },

  _onChange: function() {
    debugger
    this.setState( { benches: BenchStore.all() });
  },

  render: function(){
    console.log(this.state.benches);
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
