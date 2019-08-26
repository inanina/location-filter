import React, { Component } from 'react';
import './App.css';
import Item from './Item';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      text: 'Baden',
      type: 'all',
    }
  }

  fetchTransportData = () => {
    fetch('http://localhost:4000/v1/locations?query=' + this.state.text + '&type=' + this.state.type)
    .then(res => res.json())
    .then(data => {
      this.setState({
        isLoaded: true,
        items: data,
      })
    })
  }

  componentDidMount() {
    this.fetchTransportData();
  }

  onSearchChange = (e) => {
    this.setState({text: e.target.value});
  }

  onSearch = () => {
    this.fetchTransportData(this.state.text);
  }

  onTypeChange = (e) => {
    this.setState({
      type: e.target.value,
    })
  }

  render() {

    var { isLoaded, items } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className = "App">
          <input type="text" onChange={this.onSearchChange} value={this.state.text} />
          <button onClick={this.onSearch}>Suche</button>
          <select onChange={this.onTypeChange} value={this.state.type}>
            <option>all</option>
            <option>station</option>
            <option>poi</option>
            <option>address</option>
          </select>
          <table id='locationTable'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Typ</th>
              </tr>
            </thead>
            <tbody>
              {items.stations.map(item => (
                <Item item={item} />
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

export default App;
