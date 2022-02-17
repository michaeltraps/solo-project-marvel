import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import ComicsDisplay from './components/ComicsDisplay';

// import './stylesheets/stylesheets';


class App extends Component {
    render() {
      return (
        <div>
          <ComicsDisplay/>
        </div>
      );
    }
  }

export default App;