import React from 'react';
import './styles/App.scss';
import Tilt from 'react-parallax-tilt';

function App() {



  return (
    <div className="App">
      <header className="App-header Gradient-bkg">
        <div style={{ display: 'flex' }}>
          <p className='App-header-text Font-Bold'>Ben Kopchains</p>
        </div>
      </header>
      <body className='App-body Font-Thin'>
        <div className='App-body-scrollable'>
          <div className='Body-spacer'>
            <p className='App-header-subtext Font-Thin'>Software Developer</p>
          </div>
          <div className='Flex-row'>
            <div className='Flex-column'>
              <div>
                <p className='Section-header-text Font-Bold'>Employment</p>
              </div>
              <div className='Info-card' >
                <div style={{ width: '100%' }}>
                  Tech Lead: 			May 2021-Present
                  Lead communication with clients to answer questions about the technology in our web application and respond quickly to time-sensitive bugs or change requests.
                  Responsible for initial development environment setup and training of new hires.
                  Worked in tandem with other developers to assist on more difficult tasks.
                </div>
              </div>
              <div className='Info-card'>
                <div style={{ width: '100%' }}>
                  Software Developer: 		Jan 2020-Present
                  Provided full-stack support and worked with global clientele on two prominent web applications:
                  Cobra (CSHTML/.NET Framework/SQL):
                  Global emergency management software used to track ongoing incidents and conduct preparedness training exercises
                  Developed and customized features to align with the client’s requested capabilities.
                  Built functionality specifically for the Belgian Incident and Crisis Management System (ICMS), including the new emergency preparedness form module EM Plans.
                  Worked together with the team on the upcoming rebuild of Cobra as a single-page React application.
                  HAL (React/.NET Framework/EF):
                  Lead developer for House Appropriations Ledger web application used by the US House Appropriations Committee as a tool for tracking changes to various government budgets
                  Performed deployments to the House offline virtual machines via Azure DevOps and Octopus

                </div>
              </div>
            </div>
            <div className='Flex-column'>
              <div className='Info-card'></div>
              <div className='Info-card'></div>
              <div className='Info-card'></div>
            </div>
            <div className='Flex-column'>
              <div className='Info-card'></div>
              <div className='Info-card'></div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
