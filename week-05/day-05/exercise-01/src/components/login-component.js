var React = require('react');

var LoginComponent = React.createClass({
  render: function () {
    return (
      <div className="authenticate container">
        <h3>Authenticate</h3>
        <input type="text" className="username" placeholder="username"/>
        <input type="text" className="token" placeholder="token"/>
        <button className="login">Login</button>
      </div>
    );
  }
});

module.exports = LoginComponent;