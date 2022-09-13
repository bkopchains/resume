import { useRouter } from 'next/router';
import React, { FC } from 'react'


const About: FC = () => {
  const router = useRouter();
  return (
    <div style={{textAlign: 'center', padding: '50px'}}>
      <div style={{cursor: 'pointer'}} onClick={() => router.back()}>🚧Resume 3 Coming Soon🚧</div>
    </div>
  )
}

export default About;