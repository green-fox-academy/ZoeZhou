var React = require('react');
var ReactDOM = require('react-dom');

// create Main-Picture component
var MainPicture = React.createClass({
  getInitialState: function () {
    return {
      src: '../imgs/01.jpg'
    }
  },
  render: function () {
    return (
      <img src={this.state.src} alt="no picture" />
    );
  }
});

// create Thumb-nail component
var ThumbNail = React.createClass({
  getInitialState: function () {
    return {
      thumblists: [
        '../imgs/01.jpg',
        '../imgs/02.jpg',
        '../imgs/03.jpg',
        '../imgs/04.jpg',
        '../imgs/05.jpg',
        '../imgs/06.jpg',
      ]
    };
  },
  render: function () {
    var thumblists = this.state.thumblists;
    thumblists = thumblists.map(function (item, index) {
      return (
        <ThumbItem src={item} key={index} />
      );
    }.bind(this));
    return (
      <div className="thumb-nail">
        { thumblists }
      </div>
    );
  }
});
// create Thumb-nail item component
var ThumbItem = React.createClass({
  render: function () {
    return (
      <div>
        <img src={this.props.src} alt="" />
      </div>
    );
  }
});
// create Button component
var Button = React.createClass({
  render: function () {
    return (
      <button className={this.props.className}></button>
    );
  }
});


//create Gallery component
var Gallery = React.createClass({
  render: function () {
    return (
      <main>
        <div className="main-picture">
          <Button className='prev-btn'/>
          <MainPicture />
          <Button className='next-btn'/>
        </div>
        <ThumbNail />
      </main>
    );
  }
});

ReactDOM.render(
  <Gallery />,
  document.getElementsByClassName('gallery')[0]
);