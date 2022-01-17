import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';



class App extends Component {

  state = {
    users: []
  }
  constructor() {
    super();
    let xmls = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"\
    xmlns:gs="http://spring.io/guides/gs-producing-web-service">\
<soapenv:Header/>\
<soapenv:Body>\
<gs:getCountryRequest>\
   <gs:name>Spain</gs:name>\
</gs:getCountryRequest>\
</soapenv:Body>\
</soapenv:Envelope>';


    axios.post('http://localhost:8080/ws',
           xmls,
           {headers:
            
             {'crossDomain': true,'Content-Type': 'text/xml'}
           }).then(res=>{
             console.log("response::");
             console.log(res);
           }).catch(err=>{console.log(err)});
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* kk this prints user name  */}
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
