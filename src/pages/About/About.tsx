import React, { FC } from 'react'
import {useNavigate} from 'react-router-dom';


const About: FC = () => {
  const navigate = useNavigate();
  return (
    <div style={{textAlign: 'center', padding: '50px'}}>
      <div style={{cursor: 'pointer'}} onClick={() => navigate(-1)}>🚧Resume 3 Coming Soon🚧</div>
    </div>
  )
}

export default About;