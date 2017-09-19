var React = require('react');
var ReactDOM = require('react-dom');

// create Main-Picture component
var MainPicture = React.createClass({
  render: function () {
    return (
      <div className='main-picture'>
        <Button className='prev-btn' currentImg={this.props.currentImg} images={this.props.images} changeCurrentImg={this.props.changeCurrentImg} changeCurrentIndex={this.props.changeCurrentIndex} />
        <img src={this.props.currentImg} alt='no picture' />
        <Description images={this.props.images} currentImg={this.props.currentImg} />
        <Button className='next-btn' currentImg={this.props.currentImg} images={this.props.images} changeCurrentImg={this.props.changeCurrentImg} changeCurrentIndex={this.props.changeCurrentIndex} />
      </div>
    );
  }
});

//create Description component
var Description = React.createClass({
  render: function () {
    var thumblists = this.props.images.map((value) => value.src);
    var currentImg = this.props.currentImg;
    var titles = this.props.images.map((value) => value.title);
    var descriptions = this.props.images.map((value) => value.description);
    var index = thumblists.indexOf(currentImg);
    return (
      <div className='description-container'>
        <span className='title'>{titles[index]}</span>
        <p className='description'>{descriptions[index]}</p>
      </div>
    );
  }
})

// create Thumb-nail component
var ThumbNail = React.createClass({
  getInitialState: function () {
    return {
      thumbLength: 6
    };
  },
  render: function () {
    var images = this.props.images;
    var currentIndex = this.props.currentIndex < 7 ? 6 : this.props.currentIndex;
    var thumbLength = this.state.thumbLength;
    images = images.map(function (item, index) {
      if (index + 1 > currentIndex - thumbLength && index + 1 <= currentIndex) {
        if (item.src === this.props.currentImg) {
          return (
            <ThumbCurrent ThumbCurrent={item.src} key={index} changeCurrentImg={this.props.changeCurrentImg} title={item.title} />
          );
        } else {
          return (
            <ThumbItem ThumbCurrent={item.src} key={index} changeCurrentImg={this.props.changeCurrentImg} title={item.title} />
          );
        }
      }
    }.bind(this));
    return (
      <div className='thumb-nail'>
        {images}
      </div>
    );
  }
});

// create Thumb-Nail item component
var ThumbItem = React.createClass({
  getInitialState: function () {
    return {
      hover: false
    }
  },
  render: function () {
    var displayStyle = {
      display: this.state.hover ? 'block' : 'none'
    };
    return (
      <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <span className='popup' style={displayStyle}>{this.props.title}</span>
        <span className='triangle' style={displayStyle}></span>
        <img src={this.props.ThumbCurrent} alt='' onClick={this.handleClick} className='active' />
      </div>
    );
  },
  handleClick: function () {
    this.props.changeCurrentImg(this.props.ThumbCurrent);
  },
  handleMouseOver: function () {
    this.setState({
      hover: true
    });
  },
  handleMouseOut: function () {
    this.setState({
      hover: false
    });
  }
});

// create Thumb-Current component
var ThumbCurrent = React.createClass({
  getInitialState: function () {
    return {
      hover: false
    }
  },
  render: function () {
    var displayStyle = {
      display: this.state.hover ? 'block' : 'none'
    };
    return (
      <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <span className='popup' style={displayStyle}>{this.props.title}</span>
        <span className='triangle' style={displayStyle}></span>
        <img src={this.props.ThumbCurrent} alt='' onClick={this.handleClick} className='active' />
        <span></span>
      </div>
    );
  },
  handleClick: function () {
    this.props.changeCurrentImg(this.props.ThumbCurrent);
  },
  handleMouseOver: function () {
    this.setState({
      hover: true
    });
  },
  handleMouseOut: function () {
    this.setState({
      hover: false
    });
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
    var thumblists = this.props.images.map((value) => value.src);
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
    this.props.changeCurrentImg(this.props.images[index].src);
    this.props.changeCurrentIndex(index + 1);
  }
});

// create Search component
var Search = React.createClass({
  render: function () {
    return (
      <div className='search-container'>
        <input type='text' placeholder='input title' className='search-text' onKeyDown={this.handleKeyDown} onBlur={this.handleClick} />
        <button className='search' onClick={this.handleClick}>Search</button>
      </div>
    );
  },
  handleClick: function () {
    var titleForSearch = document.getElementsByClassName('search-text')[0].value.trim();
    if (titleForSearch.length === 0) {
      alert('input error');
      return;
    }
    var titles = this.props.images.map((value) => value.title);
    var index = titles.indexOf(titleForSearch);
    if (index === -1) {
      alert('not found');
      document.getElementsByClassName('search-text')[0].value = '';
      return;
    }
    this.props.changeCurrentImg(this.props.images[index].src);
  },
  handleKeyDown: function (event) {
    var key = event.keyCode;
    if (key == '13') {
      this.handleClick();
    }
  }
});

//create Gallery component
var Gallery = React.createClass({
  getInitialState: function () {
    return {
      currentImg: '../imgs/01.jpg',
      currentIndex: 1,
      images: [
        {
          src: '../imgs/01.jpg',
          title: 'title1',
          description: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.'
        },
        {
          src: '../imgs/02.jpg',
          title: 'title2',
          description: `Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.'
          'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.`
        },
        {
          src: '../imgs/03.jpg',
          title: 'title3',
          description: `Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`
        },
        {
          src: '../imgs/04.jpg',
          title: 'title4',
          description: `'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.`
        }, {
          src: '../imgs/05.jpg',
          title: 'title5',
          description: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.'
        }, {
          src: '../imgs/06.jpg',
          title: 'title6',
          description: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.'
        },
        {
          src: '../imgs/07.jpg',
          title: 'title7',
          description: `Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`
        },
        {
          src: '../imgs/08.jpg',
          title: 'title8',
          description: `'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.`
        }, {
          src: '../imgs/09.jpg',
          title: 'title9',
          description: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.'
        }, {
          src: '../imgs/10.jpg',
          title: 'title10',
          description: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.'
        }

      ]
    }
  },
  render: function () {
    return (
      <main>
        <Search images={this.state.images} changeCurrentImg={this.changeCurrentImg} />
        <MainPicture currentImg={this.state.currentImg} images={this.state.images} changeCurrentImg={this.changeCurrentImg} changeCurrentIndex={this.changeCurrentIndex}/>
        <ThumbNail images={this.state.images} changeCurrentImg={this.changeCurrentImg} currentImg={this.state.currentImg} currentIndex={this.state.currentIndex}/>
      </main>
    );
  },
  changeCurrentImg: function (newImgSrc) {
    this.setState({
      currentImg: newImgSrc
    });
  },
  changeCurrentIndex: function (newIndex) {
    this.setState({
      currentIndex: newIndex
    });
  }
});

ReactDOM.render(
  <Gallery />,
  document.getElementsByClassName('gallery')[0]
);