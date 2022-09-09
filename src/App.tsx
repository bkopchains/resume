import React from 'react';
import ResumeNeu from 'pages/Resume_NEU/ResumeNeu';
import { Routes, Route, useLocation } from "react-router-dom";
import ResumeBold from 'pages/Resume_BOLD/ResumeBold';
import { About } from 'pages/About';

function App() {


  return (
    <Routes>
      {/* <Route path="/" element={<About />}/> */}
      <Route path="/resume" element={<ResumeNeu />}/>
      <Route path="/resumee" element={<ResumeBold />}/>
      <Route path="/resumeee" element={<About />}/>
    </Routes>
  );
}

export default App;
