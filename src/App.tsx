import React from 'react';
import { Resume } from './components/Resume';
import { About } from './components/About';
import { Routes, Route, Link } from "react-router-dom";
import './styles/App.scss';
import useWindowDimensions from './hooks/useWindowDimensions';

function App() {
  const { width } = useWindowDimensions();

  return (
    <div className="App">
      <header className="App-header Gradient-bkg">
        <div className="App-header-content">
          <p className='App-header-text Font-Bold'>Ben {width < 1000 ? "K." : "Kopchains"}</p>
          <div className='App-header-menu'>
            <Link className='App-link' to='/'>Home</Link>
            <Link className='App-link' to='resume'>Resume</Link>
          </div>
        </div>
      </header>
      <div className='App-body Font-Thin'>
        <div className='App-body-scrollable'>
          <div className='Body-spacer'>
            {/* <p className='App-header-subtext Font-Thin'>Software Developer</p> */}
          </div>
          {/* react-router routes here */}
          <Routes>
            <Route path="/" element={<About />}/>
            <Route path="/resume" element={<Resume />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
