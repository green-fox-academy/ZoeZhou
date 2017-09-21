var React = require('react');

var RecommendedComponent = React.createClass({
  render: function () {
    return (
      <div className="recommended container">
        <h3>Recommended</h3>
        <ul>
          <li>name 01</li>
          <li>name 02</li>
          <li>name 03</li>
          <li>name 04</li>
          <li>name 05</li>
          <li>name 06</li>
          <li>name 07</li>
          <li>name 08</li>
          <li>name 09</li>
          <li>name 10</li>
          <li>name 11</li>
          <li>name 12</li>
        </ul>
      </div>
    );
  }
});

module.exports = RecommendedComponent;