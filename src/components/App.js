import React , { Component } from 'react';

import Book from './books'
import Pen from './pens'

class App extends Component {
  render(){
    return (
      <div>
        <Book/>
        <Pen/>
      </div>
    )
  }
}

export default App;



