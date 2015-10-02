var BenchForm = React.createClass({
  render: function() {
    return(
      <div>
        <form>
          <label>Description</label>
          <br/>
          <textarea rows="4" cols ="50"></textarea>
          <br/>
          <label> Latitude </label>
          <input type='text'/>
          <br/>
          <label> Longitude </label>
          <input type='text'/>
          <br/>
          <input type="submit" value='submit'/>
        </form>
      </div>
    );
  }

});
