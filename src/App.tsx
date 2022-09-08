import React from 'react';
import { Resume } from 'pages/Resume';
import { Artwork } from 'pages/Artwork';
import { Routes, Route, useLocation } from "react-router-dom";
import 'styles/App.scss';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useTransition, a } from 'react-spring'
import CustomLink from 'components/Shared/CustomLink';
import { About } from 'pages/About';

function App() {

  const { width } = useWindowDimensions();
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  return (
    <div className="App">
      <header className="App-header Gradient-bkg">
        <div className="App-header-content">
          <p className='App-header-text Font-Bold'>Ben {width < 1000 ? "K." : "Kopchains"}</p>
          <div className='App-header-menu'>
            {/* <CustomLink to='/'>About</CustomLink> */}
            <CustomLink to='/resume'>Resume</CustomLink>
            <CustomLink to='/artwork'>Artwork</CustomLink>
          </div>
        </div>
      </header>
      <div className='App-body Font-Thin'>
        <div className='App-body-scrollable'>
          <div className='Body-spacer'>
            {/* <p className='App-header-subtext Font-Thin'>Software Developer</p> */}
          </div>
          {/* react-router routes here */}
          {/* {transitions((styles, item) => (
            <a.div style={styles}> */}
              <Routes>
                {/* <Route path="/" element={<About />}/> */}
                <Route path="/resume" element={<Resume />}/>
                <Route path="/artwork" element={<Artwork />}/>
              </Routes>
            {/* </a.div>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default App;
