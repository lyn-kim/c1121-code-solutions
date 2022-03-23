import React from 'react';

function MenuIcon({ open }) {
  return (
    <i onClick={open} className="menu-icon fa fa-bars"/>
  );
}

function MenuDrawer({ heading, items, isOpen, close }) {
  const className = isOpen
    ? 'menu-drawer is-open'
    : 'menu-drawer';
  return (
    <div className={className}>
      <h3 className="menu-heading">
        { heading }
      </h3>
      <ul className="menu-items">
        {
          items.map(item => (
            <li key={item} className="menu-item" onClick={close}>
              { item }
            </li>
          ))
        }
      </ul>
    </div>
  );
}

function MenuShade({ isDrawn, close }) {
  const className = isDrawn
    ? 'menu-shade is-drawn'
    : 'menu-shade';
  return (
    <div className={className} onClick={close}/>
  );
}

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { toggleOpen } = this;
    const { isOpen } = this.state;
    const { menuHeading, menuItems } = this.props;
    return (
      <React.Fragment>
        <MenuIcon isOpen={isOpen} open={toggleOpen} />
        <MenuShade isDrawn={isOpen} close={toggleOpen} />
        <MenuDrawer
          isOpen={isOpen}
          items={menuItems}
          close={toggleOpen}
          heading={menuHeading} />
      </React.Fragment>
    );
  }
}

export default AppDrawer;
