import React, { FC } from 'react';
import CustomLink from 'components/Shared/CustomLinkBold';
// import useWindowDimensions from 'hooks/useWindowDimensions';

const ResumeBold: FC = () => {

  // const { width } = useWindowDimensions();
  return (
    <div className="bold-App">
      <div className={"flexRow bg-tan"} style={{ height: "100vh", justifyContent: "space-between" }}>
        <div className={'bg-lightorange bold-App-header'} >
          <div className='bold-App-header-text sticky'>Ben Kopchains</div>
          <div>Hello!</div>
        </div>
        <div>
          <div className='bold-links'>
            {/* <CustomLink to='/'>About</CustomLink> */}
            <CustomLink href='/'>Resume</CustomLink>
            <CustomLink href='/resumee'>Resume</CustomLink>
            <CustomLink style={{ pointerEvents: 'none' }} title="coming soon" href='/resumeee'>Resume</CustomLink>
          </div>
        </div>
      </div>
      <div className={"flexRow bg-champagne bold-blurb"} >
        Full-stack Web Developer (C# .NET / TypeScript / React) with an interest in graphic design
      </div>
      <div className={"flexRow bg-smoke scroll-container "} style={{ height: "100vh", justifyContent: "space-between" }}>
        <div className={'bg-thistle bold-Section-title'} >
          <div className='scroll-anchor' />
          <div className='bold-Section-title-text sticky'>Employment</div>
          <div className='bold-Section-subtext scroll-anchor-start'>
            <h3>Tech Lead</h3>
            <h5>Dynamis Inc: 2021-Present</h5>
          </div>
          <div className='bold-Section-subtext scroll-anchor-start'>
            <h3>Software Developer</h3>
            <h5>Dynamis Inc: 2020-Present</h5>
          </div>
          <div className='bold-Section-subtext scroll-anchor-start'>
            <h3>Junior Software Developer</h3>
            <h5>Dynamis Inc: 2018-2020</h5>
          </div>
          <div className='scroll-anchor' />
        </div>
        <div className='text-white bold-Section-title'>
          <div className='bold-Section-subtext'>
            <p>
              Lead communication with clients to answer questions about the technology in our web application and respond quickly to time-sensitive bugs or change requests.
            </p>
            <p>
              Responsible for initial development environment setup and training of new hires.
            </p>
            <p>
              Worked in tandem with other developers to assist on more difficult tasks.
            </p>
          </div>
          <div className='bold-Section-subtext'>
            Provided full-stack support and worked with global clientele on two prominent web applications:
            <p>Cobra (CSHTML/.NET/SQL):</p>
            <ul className='neu-Custom-list'>
              <li>Global emergency management software used to track ongoing incidents and conduct preparedness training exercises</li>
              <li>Developed and customized features to align with the client’s requested capabilities.</li>
              <li>Built functionality specifically for the Belgian Incident and Crisis Management System (ICMS), including the new emergency preparedness form module EM Plans.</li>
              <li>Worked together with the team on the upcoming rebuild of Cobra as a single-page React application.</li>
            </ul>
            <p>HAL (React/.NET/EF):</p>
            <ul className='neu-Custom-list'>
              <li>Lead developer for House Appropriations Ledger web application used by the US House Appropriations Committee as a tool for tracking changes to various government budgets</li>
              <li>Performed deployments to the House offline virtual machines via Azure DevOps and Octopus</li>
            </ul>
          </div>
          <div className='bold-Section-subtext'>
            Supported the team in continuous development and maintenance of the Cobra web application for clients such as the Belgian government and the US Air National Guard.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBold;