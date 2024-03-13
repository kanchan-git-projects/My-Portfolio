import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className={"flex justify-between px-5 py-3 my-3"}>
      <span className="text-xl font-bold text-green-500 border-b-4 border-green-400 md:text-2xl ">
        {location.pathname === "/" ? "About" : location.pathname.substring(1)}
      </span>
      <div className="flex space-x-5 text-lg font-semibold ">
        {location.pathname !== "/" && (
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "font-bold hover:text-green-500"
                : "hover:text-green-500"
            }
          >
            About
          </Link>
        )}
        {location.pathname !== "/Projects" && (
          <Link
            to="/Projects"
            className={
              location.pathname === "/Projects"
                ? "font-bold hover:text-green-500"
                : "hover:text-green-500"
            }
          >
            Projects
          </Link>
        )}
        {location.pathname !== "/Resume" && (
          <Link
            to="/Resume"
            className={
              location.pathname === "/Resume"
                ? "font-bold hover:text-green-500"
                : "hover:text-green-500"
            }
          >
            Resume
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// import { useState, useEffect } from "react";
// import About from "./About";
// import resume from "./resume";
// import projects from "./projects";

// const navbar = () => {
//   const [activeItem, setActiveItem] = useState<string>("About");

//   const handleClick = (item: string) => {
//     setActiveItem(item);
//   };

//   useEffect(() => {
//     const pathname = window.location.pathname;
//     if (pathname === "/") setActiveItem("About");
//     if (pathname === "/projects") setActiveItem("Projects");
//     if (pathname === "/resume") setActiveItem("Resume");
//   }, []);

//   return (
//     <div className="flex justify-between px-5 py-3 my-3">
//       <span className="text-xl font-bold text-green-500 border-b-4 border-green-400 md:text-2xl ">
//         {activeItem}
//       </span>
//       <div className="flex space-x-5 text-lg">
//         {activeItem !== "About" && (
//           <a
//             href="/"
//             onClick={(e) => {
//               e.preventDefault();
//               handleClick("About");
//             }}
//           >
//             <span>About</span>
//           </a>
//         )}
//         {activeItem !== "Projects" && (
//           <a
//             href="/projects"
//             className="hover:text-green-400"
//             onClick={(e) => {
//               e.preventDefault();
//               handleClick("Projects");
//             }}
//           >
//             <span>Projects</span>
//           </a>
//         )}
//         {activeItem !== "Resume" && (
//           <a
//             href="/resume"
//             className="hover:text-green-400"
//             onClick={(e) => {
//               e.preventDefault();
//               handleClick("Resume");
//             }}
//           >
//             <span>Resume</span>
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export default navbar;
