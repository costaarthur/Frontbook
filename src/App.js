import React from 'react';
import './App.css';
import './styles.css';

import TechList from './components/TechList'
import Header from './components/Header'
import PostList from './components/PostList'
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Header />

      <TechList />
    </div>

    // <div className="header">
    //   <Header />
    // </div>
  )
}

export default App;

// import React, { Component } from 'react';

// import Header from './components/Header'

// const App = () => (
//   <div className="App">
//     <Header />
//   </div>
// );

// export default App