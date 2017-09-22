var React = require('react');

var RepositoryOverviewComponent = React.createClass({
  render: function () {
    return (
      <div className="materials container">
        <h3>{this.props.repositoryName}</h3>
        <p className="title">{this.props.description ? this.props.description : 'he/she is too lazy to write description'}</p>
        <p className="modify-time">last modified at : {this.props.lastupdate}</p>
      </div>
    );
  }
});

module.exports = RepositoryOverviewComponent;