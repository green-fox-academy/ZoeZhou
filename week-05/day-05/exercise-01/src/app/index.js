import '../css/index.scss';
var React = require('react');
var ReactDOM = require('react-dom');
var SearchComponent = require('../components/serchcomponent');
var RepositoryOverviewComponent = require('../components/repository-overview-component');
var LoginComponent = require('../components/login-component');
var CommitListsComponent = require('../components/commit-lists-component');
var RecommendedComponent = require('../components/recommended-component');
var NavigationComponent = require('../components/navigation-component');

var GithubLookupComponent = React.createClass({
  getInitialState: function () {
    return {
      login: false,
      data: 'nothing right now',
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
        <SearchComponent data={this.state.data} changeData={this.changeData} find={this.state.find} changeFindState={this.changeFindState} />
        <RepositoryOverviewComponent />
        <LoginComponent />
        <CommitListsComponent data={this.state.data} changeData={this.changeData} />
        <RecommendedComponent />
        <div className="message-error" style={notFoundStyle}>sorry, 404 Not Found...</div>
      </div>
    );
  },
  changeData: function (newData) {
    this.setState({
      data: newData
    })
  },
  changeFindState: function (newState) {
    this.setState({
      find: newState
    })
    setTimeout(() => {
      this.setState({ find: true })
    }, 1500)
  }
});

ReactDOM.render(<GithubLookupComponent />, document.querySelector("main"));
//https://api.github.com/users/ZoeCN/repos