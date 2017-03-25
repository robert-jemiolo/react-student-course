import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersList from './UsersList';
import {connect} from 'react-redux';

import lista from './data/data';

class App extends Component {
    constructor(){
      super();
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <input type="text" onChange={ (event) => this.props.cosWpisalem(event.target.value) } />
          <h2>Welcome to React</h2>
            <button onClick={ () => this.props.cosKliknalem() }>Kliknij mnie!</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <UsersList color="#f00" list={this.props.listaUzytkownikow} />
      </div>
    );
  }
}

export default connect(
    // mapStateToProps
    state => ({
        listaUzytkownikow : state.usersList
    }),
    dispatch => ({
        cosKliknalem : () => dispatch({
            type: 'KLIKNALEM_GUZIK'
        }),
        cosWpisalem : value => dispatch({
          type: 'WPISALEM_TESKT',
          value
        })
    })
)(App);
