import React, { Component } from 'react';
// import 'whatwg-fetch';
import axios from 'axios';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      gifs: []
    };
    console.log(this.props);
  }
    
  performSearch = (query) => {
    axios
      .get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
      .then(response => { 
        console.log(response.data.data);  // show this first 
        console.log('I am searching'); // maybe demo
        this.setState({
          gifs: response.data.data
        });
      }) 
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  };
  
  // THIS EXAMPLE USES fetch()  
  // performSearch = (query) => {
  //   fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({gifs: responseData.data});  
  //     }) 
  //     .catch((error) => { // offline, for example
  //       console.log('Error fetching and parsing data', error);
  //     });
  // };
  //   
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
          <GifList data={this.state.gifs} />
        </div>
      </div>
    );
  }
}