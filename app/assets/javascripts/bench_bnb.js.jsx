$(function() {
  // const createBrowserHistory = require('history/lib/createBrowserHistory');
  
  var root = document.getElementById('content');
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function(){
      return (
        <div>
          <header><h1>Bench BnB</h1></header>
          {this.props.children}
        </div>
      );
    }
  });
  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="/benches/new" component={BenchForm}/>
      <Route path="/benches/:id" component={BenchShow}/>
    </Route>
  );
  React.render(
    // history={createBrowserHistory()}
    <Router>
      {routes}
    </Router>,
    root
  );
});
