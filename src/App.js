import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Users from './components/Users';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
  };
  async componentDidMount() {
    // axios
    //   .get('https://api.github.com/users')
    //   .then((res) => console.log(res.data));
    // OR
    var res = await axios.get('https://jsonplaceholder.typicode.com/users', {
      crossdomain: true,
    });
    console.log(res.data);
    this.setState({ users: res.data });
  }
  named = 'Not Nishu Goel';
  render() {
    const name = 'Nishu Goel';
    const showname = true;
    return (
      <div className='App'>
        {/* <h1>{name}</h1>
        <div>{showname ? this.named + 'again' : name + 'again'}</div> */}
        <Navbar title='GitHub Finder' />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
