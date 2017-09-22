var React = require('react');
const HOST = 'https://api.github.com/repos/greenfox-academy/';

var CommitListsComponent = React.createClass({
  render: function () {
    var commitMessages = this.props.commitMessages || [];
    if(commitMessages.message !== 'Not Found' ) {
      var lists = commitMessages.map((item, index) =>{
        if(index < 6) {
          return (
            <li key={index}><span className="title">{item.commit.message}</span><span className="modify-time">{item.commit.author.name} modified at ${item.commit.author.date}</span></li>
          );
        }
      })
    } 
    return (
      <div className="commits container">
        <h3>Commits <span>({commitMessages.length})</span></h3>
        <ul>
          {lists}
        </ul>
      </div>
    );
  }
});

module.exports = CommitListsComponent;