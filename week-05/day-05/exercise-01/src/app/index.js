import '../css/index.scss';
var React = require('react');
var ReactDOM = require('react-dom');
var SearchComponent = require('../components/serch-component');
var RepositoryOverviewComponent = require('../components/repository-overview-component');
var LoginComponent = require('../components/login-component');
var CommitListsComponent = require('../components/commit-lists-component');
var RecommendedComponent = require('../components/recommended-component');
var NavigationComponent = require('../components/navigation-component');
const HOST = 'https://api.github.com/repos/greenfox-academy/';

var GithubLookupComponent = React.createClass({
  getInitialState: function () {
    return {
      login: false,
      repositoryName: 'Search or Click Recommended',
      description: 'search first, now its nothing',
      lastupdate: undefined,
      commitMessages: null,
      find: true
    };
  },
  render: function () {
    var notFoundStyle = {
      display: 'none'
    };
    notFoundStyle.display = this.state.find ? 'none' : 'block';
    return (
      <div>
        <NavigationComponent />
        <SearchComponent data={this.state.repositoryName} description={this.state.description} changeData={this.changeData} find={this.state.find} changeFindState={this.changeFindState} changeDescription={this.changeDescription} changeLastUpdate={this.changeLastUpdate}/>
        <RepositoryOverviewComponent lastupdate={this.state.lastupdate} commitMessages={this.state.commitMessages} repositoryName={this.state.repositoryName} description={this.state.description} changeData={this.changeData} />
        <LoginComponent />
        <CommitListsComponent data={this.state.repositoryName} changeData={this.changeData} changeDescription={this.changeDescription} />
        <RecommendedComponent changeRepository={this.changeRepository}/>
        <div className="message-error" style={notFoundStyle}>sorry, 404 Not Found...</div>
      </div>
    );
  },
  changeData: function (newState) {
    this.setState({
      repositoryName: newState
    })
  },
  changeDescription: function (newDescription) {
    this.setState({
      description: newDescription
    })
  },
  changeFindState: function (newState) {
    this.setState({
      find: newState
    })
    setTimeout(() => {
      this.setState({ find: true })
    }, 1500)
  },
  changeRepository: function (name) {
    this.grabData(name);
  },
  changeLastUpdate: function (newLastUpdate) {
    this.setState({
      lastupdate: newLastUpdate
    })
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
      _this.changeData(newName);
      _this.changeDescription(newDescription);
      _this.changeLastUpdate(newLastUpdate);
    })
    .catch(error=>{this.props.changeFindState(false);return;}) 
  },
  grabSubmit: function () {

  }
});

ReactDOM.render(<GithubLookupComponent />, document.querySelector("main"));
//https://api.github.com/users/ZoeCN/repos