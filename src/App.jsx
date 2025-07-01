import React from "react";
import { BrowserRouter as Router ,Routes, Route, HashRouter } from "react-router-dom";
import Home from './components/Home';
import Course from './components/Course';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import Signin from './components/Signin';

function App() {
  return (
     <div style={{ backgroundColor: 'gray' }}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;
