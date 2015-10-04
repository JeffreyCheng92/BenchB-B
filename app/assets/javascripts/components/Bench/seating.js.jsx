var Seating = React.createClass({
  _submitHandler: function(event) {
    event.preventDefault();
    var min = React.findDOMNode(this.refs.min).value.trim();
    var max = React.findDOMNode(this.refs.max).value.trim();
    
    ApiUtil.addParam({ seats: [min, max] });
  },

  render: function() {
    return(
      <div>
        Seating Filter:
        <form onSubmit={this._submitHandler}>
          <label> Min Seats: </label>
          <input type="number" min="0" step="1" ref='min'/>
          <br/>
          <label> Max Seats: </label>
          <input type="number" min='1' step='1' ref='max'/>
          <br/>
          <input type='submit' value="Search"/>
        </form>
        <br/>
      </div>
    );
  }
});
