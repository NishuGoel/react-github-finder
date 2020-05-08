import React, { Component } from 'react';

export class Navbar extends Component {
  state = {
    title: 'Nishu',
    html_url: 'soemthing',
  };
  render() {
    const { title, html_url } = this.state;
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className='fab fa-github' />
          {this.props.title}
        </h1>
        <div>{title}</div>
      </nav>
    );
  }
}

export default Navbar;
