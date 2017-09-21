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
    fetch(`${HOST + repositoryName}`).then(function (response) {
      if(response.status === 404){
        throw new Error('404 NOT FOUND');
      }
      return response.json();
    }).then(function (value) {
      var fetchData = value.name;
      _this.props.changeData(fetchData);
    })
    .catch(error=>{this.props.changeFindState(false);return;}) 
  },
  clearBorder: function () {
    var inputElement = document.getElementsByClassName('search-input')[0];
    inputElement.value = '';
    inputElement.style.border = 'none';
    inputElement.style.borderBottom = '1px solid #333';
  }
});

module.exports = SearchComponent;