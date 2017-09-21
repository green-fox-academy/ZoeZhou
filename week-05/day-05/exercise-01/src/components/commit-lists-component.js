var React = require('react');
const HOST = 'https://api.github.com/repos/greenfox-academy/';

var CommitListsComponent = React.createClass({
  componentDidMount: function () {
    this.grabData();
  },
  render: function () {
    return (
      <div className="commits container">
        <h3>Commits <span>(2760)</span></h3>
        <ul>
          <li><span className="title">{this.props.data} fix add dwadaw in it</span><span className="modify-time">zoe 2017/12/12 19:21</span></li>
          <li><span className="title">fix add dwadaw in it</span><span className="modify-time">zoe 2017/12/12 19:21</span></li>
          <li><span className="title">fix add dwadaw in it</span><span className="modify-time">zoe 2017/12/12 19:21</span></li>
          <li><span className="title">fix add dwadaw in it</span><span className="modify-time">zoe 2017/12/12 19:21</span></li>
          <li><span className="title">fix add dwadaw in it</span><span className="modify-time">zoe 2017/12/12 19:21</span></li>
        </ul>
      </div>
    );
  },
  grabData: function () {
    var _this = this;
    fetch( HOST + 'ZoeZhou').then(function (response) {
      return response.json();
    }).then(function (value) {
      var fetchData = value.name;
      _this.props.changeData(fetchData);
    })
  }
});

module.exports = CommitListsComponent;