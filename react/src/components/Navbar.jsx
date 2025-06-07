// import { Link, NavLink } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import ToggleButton from "./ToggleButton";
// import { useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);

//   return (
//     <div className="border-2 flex justify-between items-center py-1 px-5  bg-red-700">
//       {/* Logo */}
//       <Link to="/" className="logo text-xl font-bold">
//         Portfolio
//       </Link>

//       {/* Main nav - hidden on small screens */}
//       <div className="nav hidden sm:flex gap-9 ">
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/skill">Skills</NavLink>
//         <NavLink to="/portfolio">Portfolio</NavLink>
//         <NavLink to="/contact">Contact</NavLink>
//       </div>

//       {/* ToggleButton (dark/light mode) */}
//       <div className="cursor-pointer">
//         <ToggleButton />
//       </div>

//       {/* Menu icon for small screen */}
//       <div
//         className="sm:hidden cursor-pointer ml-3"
//         onClick={() => setVisible(true)}
//       >
//         {!visible && <MenuIcon />}
//       </div>

//       {/* Mobile menu */}
//       {visible && (
//         <div className="sm:hidden absolute top-14 right-4 bg-white p-5 rounded shadow-md flex flex-col gap-4 z-50">
//           <div className="flex justify-end">
//             <CloseIcon
//               className="cursor-pointer"
//               onClick={() => setVisible(false)}
//             />
//           </div>
//           <NavLink onClick={() => setVisible(false)} to="/">
//             Home
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} to="/about">
//             About
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} to="/skill">
//             Skills
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} to="/portfolio">
//             Portfolio
//           </NavLink>
//           <NavLink onClick={() => setVisible(false)} to="/contact">
//             Contact
//           </NavLink>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;












import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleButton from "./ToggleButton";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-red-700 shadow-md">
      <div className="flex justify-between items-center py-2 px-5 border-b border-white">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-mono font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text"
        >
          &lt;Aniket /&gt;
        </Link>

        {/* Main nav */}
        <div className="hidden sm:flex gap-9 text-white">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skill">Skills</NavLink>
          <NavLink to="/project">Project</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* ToggleButton */}
        <div className="cursor-pointer">
          <ToggleButton />
        </div>

        {/* Menu icon (mobile) */}
        <div
          className="sm:hidden cursor-pointer ml-3 text-white"
          onClick={() => setVisible(true)}
        >
          {!visible && <MenuIcon />}
        </div>

        {/* Mobile menu */}
        {visible && (
          <div className="sm:hidden absolute top-14 right-4 bg-white p-5 rounded shadow-md flex flex-col gap-4 z-50">
            <div className="flex justify-end">
              <CloseIcon
                className="cursor-pointer"
                onClick={() => setVisible(false)}
              />
            </div>
            <NavLink onClick={() => setVisible(false)} to="/">
              Home
            </NavLink>
            <NavLink onClick={() => setVisible(false)} to="/about">
              About
            </NavLink>
            <NavLink onClick={() => setVisible(false)} to="/skill">
              Skills
            </NavLink>
            <NavLink onClick={() => setVisible(false)} to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink onClick={() => setVisible(false)} to="/contact">
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
