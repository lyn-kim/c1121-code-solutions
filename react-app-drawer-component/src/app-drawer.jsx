import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    this.setState({ clicked: true });
  }

  hideMenu() {
    this.setState({ clicked: false });
  }

  render() {
    if (!this.state.clicked) {
      return (
        <div onClick={this.showMenu} className="burger-menu">
        <i className="fas fa-bars fa-2x"></i>
      </div>
      );
    }
    return (
      <div className="nav-container">
        <div className="nav-bg">
          <h1 className="nav-title">Menu</h1>
          <ol className="nav-list">
            <li onClick={this.hideMenu} className="nav-item">About</li>
            <li onClick={this.hideMenu} className="nav-item">Get Started</li>
            <li onClick={this.hideMenu} className="nav-item">Sign In</li>
          </ol>
        </div>
        <div onClick={this.hideMenu} className="shadow"></div>
      </div>
    );
  }
}
