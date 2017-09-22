var React = require('react');
const HOST = 'https://api.github.com/repos/greenfox-academy/';

var CommitListsComponent = React.createClass({
  componentDidMount: function () {
    // this.grabData();
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
    var myHeaders = new Headers({
      "Authorization": "Basic Wm9lQ046MWI0NTgxZWIwZjdlYjMyNjQ3ZmI3MjhjNGVlOTljZTJiY2Q0ODgwZA=="
    });
    var myInit = {
      method: 'GET',
      headers: myHeaders
    };
    fetch(HOST + 'ZoeZhou', myInit).then(function (response) {
      return response.json();
    }).then(function (value) {
      var newName = value.name;
      var newDescription = value.description;
      _this.props.changeData(newName);
      _this.props.changeDescription(newDescription);
    })
  }
});

module.exports = CommitListsComponent;