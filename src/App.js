import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/businessList/BusinessList.js';
import SearchBar from './components/searchBar/SearchBar.js';
import search from './util/Yelp';


class App extends Component {
  constructor(props){
    super(props);
    this.state={arrayBusiness:[]};
    this.searchYelp=this.searchYelp.bind(this);
  }
  
  searchYelp(term,location,sortBy){
    search(term,location,sortBy).then((businesses)=>{
       this.setState({arrayBusiness:businesses});
    });
  }
  render() {
    return (
      <div className="App">
      <h1>FindMe!</h1>
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={this.state.arrayBusiness} />
    </div>
    );
  }
}

export default App;
