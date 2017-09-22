var React = require('react');
const HOST = 'https://api.github.com/repos/greenfox-academy/';

var SearchComponent = React.createClass({
  render: function () {
    return (
      <div className="search-area">
        <span className="repository-name">greenfox-academy/</span>
        <input type="text" className="search-input" placeholder="repository name" onFocus={this.clearBorder}/>
        <button className="search" onClick={this.searchRepository}>Go</button>
      </div>
    );
  },
  searchRepository: function () {
    var inputElement = document.getElementsByClassName('search-input')[0];
    var repositoryName = inputElement.value.trim();
    try{
      if (repositoryName.length === 0) {
        throw new Error('input error');
      } else {
        this.grabData(repositoryName);
        this.updateCommit(repositoryName);
        inputElement.value = '';
      }
    }
    catch(error){
      inputElement.style.border = '2px solid red';
      return;
    }
  },
  grabData: function (repositoryName) {
    var _this = this;
    var myHeaders = new Headers({
      "Authorization": "Basic Wm9lQ046MWI0NTgxZWIwZjdlYjMyNjQ3ZmI3MjhjNGVlOTljZTJiY2Q0ODgwZA=="
    });
    var myInit = {
      method: 'GET',
      headers: myHeaders
    };
    fetch(`${HOST + repositoryName}`, myInit).then(function (response) {
      if(response.status === 404){
        throw new Error('404 NOT FOUND');
      }
      return response.json();
    }).then(function (value) {
      var newName = value.name;
      var newDescription = value.description;
      var newLastUpdate = value.pushed_at;
      _this.props.changeData(newName);
      _this.props.changeDescription(newDescription);
      _this.props.changeLastUpdate(newLastUpdate);
    })
    .catch(error=>{this.props.changeFindState(false);return;}) 
  },
  updateCommit: function (repositoryName) {
    var _this = this;
    var url = 'https://api.github.com/repos/greenfox-academy/';
    var myHeaders = new Headers({
      "Authorization": "Basic Wm9lQ046MWI0NTgxZWIwZjdlYjMyNjQ3ZmI3MjhjNGVlOTljZTJiY2Q0ODgwZA=="
    });
    var myInit = {
      method: 'GET',
      headers: myHeaders
    };
    fetch(url + repositoryName + '/commits', myInit).then(function (response) {
      return response.json();
    }).then(function (value) {
      _this.props.changeSubmits(value);
    })
  },
  clearBorder: function () {
    var inputElement = document.getElementsByClassName('search-input')[0];
    inputElement.value = '';
    inputElement.style.border = 'none';
    inputElement.style.borderBottom = '1px solid #333';
  }
});

module.exports = SearchComponent;