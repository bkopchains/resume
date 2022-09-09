import React, { FC } from 'react';
import CustomLink from 'components/Shared/CustomLinkBold';
import 'styles/Bold.scss';
import useWindowDimensions from 'hooks/useWindowDimensions';

const ResumeBold: FC = () => {

  const { width } = useWindowDimensions();
  return (
    <div className="bold-App">
      <div className={"flexRow bold-bg-tan"} style={{ height: "100vh", justifyContent: "space-between" }}>
        <div className={'bold-bg-lightorange bold-App-header'} >
          <div className='bold-App-header-text'>Ben {width < 1000 ? "K." : "Kopchains"}</div>
        </div>
        <div>
          <div className='bold-links'>
            {/* <CustomLink to='/'>About</CustomLink> */}
            <CustomLink to='/resume'>Resume</CustomLink>
            <CustomLink to='/resumee'>Resume</CustomLink>
            <CustomLink style={{pointerEvents: 'none'}} title="coming soon" to='/resumeee'>Resume</CustomLink>
          </div>
        </div>
      </div>
      <div className={"flexRow bold-bg-champagne bold-blurb"} >
        Full-stack Web Developer (C# .NET / TypeScript / React) with an interest in graphic design
      </div>
    </div>
  )
}

export default ResumeBold;