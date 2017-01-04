import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
    
  performSearch = (data, query) => {
    let _this = this;
    axios
      .get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => { 
        console.log(response.data.data);  // show this first 
        console.log(query); // maybe demo
        _this.setState({
          data: response.data.data
        });
      }) 
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  };
    
  render() {    
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm onSearch={this.performSearch} />
          </div>   
        </div>    
        <div className="main-content clearfix">
          <GifList data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
