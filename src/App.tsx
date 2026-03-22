import { Route, Routes } from "react-router-dom";
import Artwork from "pages/art/Artwork";
import ResumeNeu from "pages/resume/ResumeNeu";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ResumeNeu />} />
      <Route path="/resume" element={<ResumeNeu />} />
      <Route path="/art" element={<Artwork />} />
    </Routes>
  );
}
