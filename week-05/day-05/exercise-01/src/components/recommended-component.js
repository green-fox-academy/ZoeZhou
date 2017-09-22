var React = require('react');
const HOST = 'https://api.github.com/search/repositories?q=topic:epam-jsa+org:greenfox-academy';

var RecommendedComponent = React.createClass({
  getInitialState: function () {
    return {
      data: [],
      links: null,
      nameForSearch: null
    }
  },
  componentDidMount: function () {
    this.grabData();
  },
  render: function () {
    var datas = this.state.data;
    var recommendeds = datas.map((item,index) => {
      return (
        <li key={index} onClick={()=>this.clickhander(item)} name={item}>{item}</li>
      );
    })
    return (
      <div className="recommended container">
        <h3>Recommended</h3>
        <ul>
          {recommendeds}
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
    fetch(HOST, myInit).then(function (response) {
      return response.json();
    }).then(function (value) {
      var value = value.items;
      var nameLists = value.map(function (list) {
        return list.name;
      });
      _this.changeData(nameLists);
    })
  },
  changeData: function (newData) {
    this.setState({
      data: newData
    })
  },
  clickhander: function (name) {
    this.props.changeRepository(name);
  }
});

module.exports = RecommendedComponent;