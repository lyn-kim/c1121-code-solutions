import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 1
    };
    this.showImg = this.showImg.bind(this);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => this.goNext(), 3000);
  }

  showImg(id) {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.goNext(), 3000);
    this.setState({ currentImage: id });
  }

  goNext() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.goNext(), 3000);
    if (this.state.currentImage === this.props.imgArray.length - 1) {
      this.setState({ currentImage: 0 });
    } else {
      this.setState(prev => ({
        currentImage: prev.currentImage + 1
      }));
    }
  }

  goPrev() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.goNext(), 3000);
    if (this.state.currentImage === 0) {
      this.setState({ currentImage: this.props.imgArray.length - 1 });
    } else {
      this.setState(prev => ({
        currentImage: prev.currentImage - 1
      }));
    }
  }

  render() {

    const imgArray = this.props.imgArray;

    return (
        <div className="container">
          <div className="row border">
            <div className="column-fourth center">
              <button className="previous" onClick={this.goPrev}><i className="fas fa-angle-left"></i></button>
            </div>
            <div className="column-half">
              <div className="row center">
              <img className="pic" src={imgArray[this.state.currentImage].url}/>
              </div>
              <div className="row center dot-container">
              {
                imgArray.map(img => {
                  return (
                    this.state.currentImage === img.id
                      ? <div className='dot fas fa-circle' key={img.id} onClick={() => this.showImg(img.id)}></div>
                      : <div className='dot far fa-circle' key={img.id} onClick={() => this.showImg(img.id)}></div>);
                })
              }
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
