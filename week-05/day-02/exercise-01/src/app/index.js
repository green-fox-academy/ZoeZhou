var React = require('react');
var ReactDOM = require('react-dom');

// create Main-Picture component
var MainPicture = React.createClass({
  render: function () {
    return (
      <img src={this.props.src} alt="no picture" />
    );
  }
});

// create Thumb-nail component
var ThumbNail = React.createClass({
  render: function () {
    var thumblists = this.props.thumblists;
    thumblists = thumblists.map(function (item, index) {
      if (item === this.props.currentImg) {
        return (
          <ThumbCurrent src={item} key={index} changeCurrentImg={this.props.changeCurrentImg} />
        );
      } else {
        return (
          <ThumbItem src={item} key={index} changeCurrentImg={this.props.changeCurrentImg} />
        );
      }
    }.bind(this));
    return (
      <div className="thumb-nail">
        {thumblists}
      </div>
    );
  }
});

// create Thumb-Nail item component
var ThumbItem = React.createClass({
  render: function () {
    return (
      <div>
        <img src={this.props.src} alt="" onClick={this.handleClick} className="active" />
      </div>
    );
  },
  handleClick: function () {
    this.props.changeCurrentImg(this.props.src);
  }
});

// create Thumb-Current component
var ThumbCurrent = React.createClass({
  render: function () {
    return (
      <div>
        <img src={this.props.src} alt="" onClick={this.handleClick} className="active" />
        <span></span>
      </div>
    );
  },
  handleClick: function () {
    this.props.changeCurrentImg(this.props.src);
  }
});

// create Button component
var Button = React.createClass({
  render: function () {
    return (
      <button className={this.props.className} onClick={this.handleClick} ></button>
    );
  },
  handleClick: function () {
    var thumblists = this.props.thumblists;
    var currentImg = this.props.currentImg;
    var index = thumblists.indexOf(currentImg);
    if (this.props.className === 'next-btn') {
      if (index === thumblists.length - 1) {
        index = 0;
      } else {
        index++;
      }
    } else {
      if (index === 0) {
        index = thumblists.length - 1;
      } else {
        index--;
      }
    }
    this.props.changeCurrentImg(thumblists[index]);
  }
});

//create Gallery component
var Gallery = React.createClass({
  getInitialState: function () {
    return {
      currentImg: '../imgs/01.jpg',
      thumblists: [
        '../imgs/01.jpg',
        '../imgs/02.jpg',
        '../imgs/03.jpg',
        '../imgs/04.jpg',
        '../imgs/05.jpg',
        '../imgs/06.jpg'
      ]
    }
  },
  render: function () {
    return (
      <main>
        <div className="main-picture">
          <Button className='prev-btn' currentImg={this.state.currentImg} thumblists={this.state.thumblists} changeCurrentImg={this.changeCurrentImg} />
          <MainPicture src={this.state.currentImg} />
          <Button className='next-btn' currentImg={this.state.currentImg} thumblists={this.state.thumblists} changeCurrentImg={this.changeCurrentImg} />
        </div>
        <ThumbNail thumblists={this.state.thumblists} changeCurrentImg={this.changeCurrentImg} currentImg={this.state.currentImg} />
      </main>
    );
  },
  changeCurrentImg: function (newImgSrc) {
    this.setState({
      currentImg: newImgSrc
    });
  }
});

ReactDOM.render(
  <Gallery />,
  document.getElementsByClassName('gallery')[0]
);