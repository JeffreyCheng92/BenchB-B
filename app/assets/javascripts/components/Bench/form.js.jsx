var BenchForm = React.createClass({
  _submitHandler: function(event) {
    event.preventDefault();
    var desc = React.findDOMNode(this.refs.desc).value.trim()
    var lat = React.findDOMNode(this.refs.lat).value.trim();
    var lng = React.findDOMNode(this.refs.lng).value.trim();
    var seating = React.findDOMNode(this.refs.seating).value.trim();
    var formData = { bench: { description: desc,
                              lat: lat,
                              lng: lng,
                              seating: seating } };
    ApiUtil.createBench(formData);
  },

  render: function() {
    return(
      <div>
        <form onSubmit={this._submitHandler}>
          <label>Description:</label>
          <br/>
          <textarea rows="4" cols ="50" ref='desc'></textarea>
          <br/>
          <label> Latitude: </label>
          <input type='text' ref='lat'/>
          <br/>
          <label> Longitude: </label>
          <input type='text' ref='lng'/>
          <br/>
          <label> Seating: </label>
          <input type="number" min="1" step="1" ref='seating'/>
          <br/>
          <input type="submit" value='submit'/>
        </form>
      </div>
    );
  }

});
