import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {


  
  return (
    <div className="App">
      <header className="App-header Font-Bold Gradient-bkg">
        <div>
          <p className='App-header-text'>Ben Kopchains</p>
        </div>
      </header>
      <body className='App-body Font-Thin'>
        <div className='App-body-scrollable'>
          <div className='Body-spacer'/>
          <div style={{display: 'flex'}}>
            <div className='Info-card' style={{flexGrow: 3}}></div>
            <div className='Info-card' style={{flexGrow: 1}}></div>
          </div>
          <div style={{display: 'flex'}}>
            <div className='Info-card' style={{flexGrow: 1}}></div>
            <div className='Info-card' style={{flexGrow: 2}}></div>
            <div className='Info-card' style={{flexGrow: 2}}></div>
          </div>
          <div style={{display: 'flex'}}>
            <div className='Info-card' style={{flexGrow: 1}}></div>
            <div className='Info-card' style={{flexGrow: 1}}></div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
