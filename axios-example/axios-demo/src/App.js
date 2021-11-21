import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users'
})

class App extends Component {

  state = {
    users : []
  }
  constructor() {
    super();
    api.get('/').then(res => {
      console.log(res.data);
      this.setState({users:res.data});
    })
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* kk this prints user name  */}
          {this.state.users.map(user=><h2 key={user.id}>{user.name}</h2>)}
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
