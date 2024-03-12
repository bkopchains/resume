import { useState, useEffect } from 'react';

//see https://stackoverflow.com/a/36862446

const useWindowDimensions = () => {
  // const [windowDimensions, setWindowDimensions] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight
  // });

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowDimensions({
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     });
  //   }

  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // return windowDimensions;
  return ({width: 0, height: 0})
}

export default useWindowDimensions