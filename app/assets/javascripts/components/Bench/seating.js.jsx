var Seating = React.createClass({

  render: function() {
    return(
      <div>
        Seating Filter:
        <form>
          <label> Min Seats: </label>
          <input type="number" min="0" step="1" ref='min-seat'/>
          <br/>
          <label> Max Seats: </label>
          <input type="number" min='1' step='1' ref='max-seat'/>
          <br/>
          <input type='submit' value="Search"/>
        </form>
        <br/>
      </div>
    );
  }
});
