import React from 'react';
import './App.css';
import './styles.css';

import TechList from './components/TechList'
import Header from './components/Header'
import PostList from './components/PostList'
import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      {/* <TechList /> */}
      <Footer />
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