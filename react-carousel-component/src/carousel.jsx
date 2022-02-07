import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 1,
      images: [
        {
          id: 1,
          url: 'https://images.unsplash.com/photo-1530292178889-67a8dc571e85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 2,
          url: 'https://images.unsplash.com/photo-1496034663057-6245f11be793?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 3,
          url: 'https://images.unsplash.com/photo-1532728233432-ca70fefe237a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHJhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 4,
          url: 'https://images.unsplash.com/photo-1622902769420-d7a0a4720e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHJhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        },
        {
          id: 5,
          url: 'https://images.unsplash.com/photo-1470293728846-df1a5aa55d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fHJhaW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
        }
      ]
    };
    // this.showImg = this.showImg.bind(this);
    // this.goNext = this.goNext.bind(this);
    // this.goPrev = this.goPrev.bind(this);
  }

  // showImg(id) {
  // this.setState({ currentImage: id });
  //   this.intervalId = setInterval(() => {
  //     this.setState(state => {
  //       return {
  //         currentImage: state.currentImage + 1
  //       };
  //     });
  //   }, 1000);
  // }

  // goNext() {

  // }

  render() {

    return (
        <div className="container">
          <div className="row border">
            <div className="column-fourth center">
              <button className="previous" onClick={this.goPrev}><i className="fas fa-angle-left"></i></button>
            </div>
            <div className="column-half">
              <div className="row center">
                  <img className="pic" src={this.state.images[0].url}/>
              </div>
              <div className="row center dot-container">
                <span><i data-image="0" className="dot fas fa-circle"></i></span>
                <span><i data-image="1" className="dot far fa-circle"></i></span>
                <span><i data-image="2" className="dot far fa-circle"></i></span>
                <span><i data-image="3" className="dot far fa-circle"></i></span>
                <span><i data-image="4" className="dot far fa-circle"></i></span>
              </div>
            </div>
            <div className="column-fourth center">
              <button className="next" onClick={this.goNext}><i className="fas fa-angle-right"></i></button>
            </div>
          </div>
        </div>
    );

  }

}

// var dot = document.querySelectorAll('.dot');
// var imageIndex = 0;

// setInterval(goForward, 3000);

// function showImage() {
//   currentImage.src = images[imageIndex];

//   for (var i = 0; i < images.length; i++) {
//     if (i === imageIndex) {
//       dot[i].className = 'dot fas fa-circle';
//     } else {
//       dot[i].className = 'dot far fa-circle';
//     }
//   }
// }

// function goForward() {
//   imageIndex++;
//   if (imageIndex >= 5) {
//     imageIndex = 0;
//   }
//   showImage();
// }

// function goBackward() {
//   imageIndex--;
//   if (imageIndex < 0) {
//     imageIndex = 4;
//   }
//   showImage();
// }
