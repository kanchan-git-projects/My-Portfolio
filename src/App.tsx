import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../components/About";
import Myprojects from "../components/Myprojects";
import Myresume from "../components/Myresume";

const App = () => {
  return (
    <Router>
      <div className="grid grid-cols-12 gap-6 px-5 my-5 lg:px-50 sm:px-30 md:px-32">
        <div className="col-span-12 p-4 text-center bg-white lg:col-span-3 rounded-2xl ">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Myprojects />} />
            <Route path="/resume" element={<Myresume />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
