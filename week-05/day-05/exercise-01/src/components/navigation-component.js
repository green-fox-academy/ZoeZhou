var React = require('react');

var NavigationComponent = React.createClass({
  render: function () {
    return (
      <header className="header">
        <a href="https://github.com/">Github</a>
        <a href="https://developer.mozilla.org/en-US/">MDN</a>
        <a href="https://stackoverflow.com/">Stack Overflow</a>
      </header>
    );
  }
});

module.exports = NavigationComponent;