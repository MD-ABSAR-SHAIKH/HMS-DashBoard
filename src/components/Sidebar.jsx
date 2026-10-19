// // import React, { useContext, useState } from "react";
// // // import { Context } from "../main";
// // import { TiHome } from "react-icons/ti";
// // import { RiLogoutBoxFill } from "react-icons/ri";
// // import { AiFillMessage } from "react-icons/ai";
// // // import { GiHamburgerMenu } from "react-icons/gi";
// // import { FaUserDoctor } from "react-icons/fa6";
// // import { MdAddModerator } from "react-icons/md";
// // import { IoPersonAddSharp } from "react-icons/io5";
// // import { useNavigate } from "react-router-dom";
// // // import axios from "axios";
// // // import { toast } from "react-toastify";

// // const Sidebar = () => {
// //   const [show, setShow] = useState(true);

// //   // const { isAuthenticated, setIsAuthenticated } = useContext(Context);
// //   // console.log(isAuthenticated);

// //   const navigate = useNavigate();

// //   const gotoHome = () => {
// //     navigate("/");
// //
// //   };
// //   const gotoDoctorsPage = () => {
// //     navigate("/doctors");
// //
// //   };
// //   const gotoMessage = () => {
// //     navigate("/messages");
// //
// //   };
// //   const gotoAddNewDoctor = () => {
// //     navigate("/doctor/addnew");
// //
// //   };
// //   const gotoAddNewAdmin = () => {
// //     navigate("/admin/addnew");
// //
// //   };

// //   const handleLogout = async () => {
// //     // await axios
// //     //   .get("https://hms-backend-czxa.onrender.com/api/v1/user/admin/logout", {
// //     //     withCredentials: true,
// //     //   })
// //     //   .then((res) => {
// //     //     toast.success(res.data.message);
// //     //     setIsAuthenticated(false);
// //     //   })
// //     //   .catch((err) => {
// //     //     toast.error(err.response.data.message);
// //     //   });
// //   };

// //   return (
// //     <>
// //       {/* <div
// //         className={`${!isAuthenticated ? "hidden" : "flex"} text-3xl pl-2 pt-2`}
// //       >
// //         <GiHamburgerMenu
// //           onClick={() => {
// //
// //           }}
// //         />
// //       </div> */}
// //       <nav
// //         // className={`${!isAuthenticated ? "hidden" : "flex"} mt-36 pl-2 ${
// //         //   show ? "hidden" : "flex"
// //         className="w-8"
// //       >
// //         <span className="text-3xl flex justify-center items-center flex-col gap-4">
// //           <TiHome onClick={gotoHome} />
// //           <FaUserDoctor onClick={gotoDoctorsPage} />
// //           <MdAddModerator onClick={gotoAddNewAdmin} />
// //           <IoPersonAddSharp onClick={gotoAddNewDoctor} />
// //           <AiFillMessage onClick={gotoMessage} />
// //           <RiLogoutBoxFill onClick={handleLogout} />
// //         </span>
// //       </nav>

// //       {/* <div className={`${isAuthenticated ? "hidden" : "flex"}`}>
// //         <GiHamburgerMenu
// //           onClick={() => {
// //
// //           }}
// //         />
// //       </div> */}
// //     </>
// //   );
// // };

// // export default Sidebar;

// import React, { useContext } from "react";
// import { Context } from "../main";
// import { TiHome } from "react-icons/ti";
// import { RiLogoutBoxFill } from "react-icons/ri";
// import { AiFillMessage } from "react-icons/ai";
// import { FaUserDoctor } from "react-icons/fa6";
// import { MdAddModerator } from "react-icons/md";
// import { IoPersonAddSharp } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Sidebar = () => {
//   const { isAuthenticated, setIsAuthenticated, url } = useContext(Context);

//   const navigate = useNavigate();

//   const gotoHome = () => {
//     navigate("/");
//   };
//   const gotoDoctorsPage = () => {
//     navigate("/doctors");
//   };
//   const gotoMessage = () => {
//     navigate("/messages");
//   };
//   const gotoAddNewDoctor = () => {
//     navigate("/doctor/addnew");
//   };
//   const gotoAddNewAdmin = () => {
//     navigate("/admin/addnew");
//   };

//   const handleLogout = async () => {
//     await axios
//       .get("https://hms-backend-czxa.onrender.com/api/v1/user/admin/logout", {
//         // .get(`${url}/api/v1/user/admin/logout`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         toast.success(res.data.message);
//         setIsAuthenticated(false);
//       })
//       .catch((err) => {
//         toast.error(err.response.data.message);
//       });
//     navigate("/login");
//   };

//   return (
//     <>
//       {/* <nav className={`${!isAuthenticated ? "hidden" : "flex"}`}>
//         <div className="flex justify-end items-center gap-12 mx-auto my-2">
//           <span
//             onClick={gotoHome}
//             className="flex cursor-pointer justify-center items-center gap-2"
//           >
//             HOME
//             <TiHome className="text-xl" />
//           </span>
//           <span
//             onClick={gotoDoctorsPage}
//             className="flex cursor-pointer justify-center items-center gap-2"
//           >
//             DOCTORS
//             <FaUserDoctor className="text-xl" />
//           </span>
//           <span
//             onClick={gotoAddNewAdmin}
//             className="flex cursor-pointer justify-center items-center gap-2"
//           >
//             ADD DOCTOR
//             <MdAddModerator className="text-xl" />
//           </span>
//           <span
//             onClick={gotoAddNewDoctor}
//             className="flex cursor-pointer justify-center items-center gap-2"
//           >
//             ADD ADMIN
//             <IoPersonAddSharp className="text-xl" />
//           </span>
//           <span
//             onClick={gotoMessage}
//             className="flex cursor-pointer justify-center items-center gap-2"
//           >
//             MESSAGE
//             <AiFillMessage className="text-xl" />
//           </span>
//           <span
//             onClick={handleLogout}
//             className="flex cursor-pointer justify-center items-center gap-2"
//           >
//             LOGOUT
//             <RiLogoutBoxFill className="text-xl" />
//           </span>
//         </div>
//       </nav> */}
//       <nav
//         className={`${
//           !isAuthenticated ? "hidden" : "flex"
//         } bg-white shadow-md py-4 sticky top-0 z-50`}
//       >
//         <div className="flex justify-between items-center gap-8 mx-auto container px-8">
//           <Link to={"/"}><img src="./logo.png" width={"130rem"} alt="" /></Link>
//           <span
//             onClick={gotoHome}
//             className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
//           >
//             <TiHome className="text-2xl" />
//             <span className="text-lg font-medium">HOME</span>
//           </span>
//           <span
//             onClick={gotoDoctorsPage}
//             className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
//           >
//             <FaUserDoctor className="text-2xl" />
//             <span className="text-lg font-medium">DOCTORS</span>
//           </span>
//           <span
//             onClick={gotoAddNewAdmin}
//             className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
//           >
//             <MdAddModerator className="text-2xl" />
//             <span className="text-lg font-medium">ADD DOCTOR</span>
//           </span>
//           <span
//             onClick={gotoAddNewDoctor}
//             className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
//           >
//             <IoPersonAddSharp className="text-2xl" />
//             <span className="text-lg font-medium">ADD ADMIN</span>
//           </span>
//           <span
//             onClick={gotoMessage}
//             className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-blue-500 transition-colors"
//           >
//             <AiFillMessage className="text-2xl" />
//             <span className="text-lg font-medium">MESSAGE</span>
//           </span>
//           <span
//             onClick={handleLogout}
//             className="flex cursor-pointer items-center gap-2 text-gray-700 hover:text-red-500 transition-colors"
//           >
//             <RiLogoutBoxFill className="text-2xl" />
//             <span className="text-lg font-medium">LOGOUT</span>
//           </span>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Sidebar;
import React, { useContext, useState } from "react";
import { Context } from "../main";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { FaUserDoctor } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import { IoPersonAddSharp, IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Sidebar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const go = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  // const handleLogout = async () => {
  //   setIsOpen(false);
  //   await axios
  //     .get("https://hms-backend-czxa.onrender.com/api/v1/user/admin/logout", {
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       toast.success(res.data.message);
  //       setIsAuthenticated(false);
  //     })
  //     .catch((err) => {
  //       toast.error(err.response?.data?.message || err.message);
  //     });
  //   navigate("/login");
  // };
const handleLogout = async () => {
  setIsOpen(false);

  // Immediately update the UI and redirect
  setIsAuthenticated(false);
  navigate("/login", { replace: true });

  try {
    const res = await axios.get(
      "https://hms-backend-czxa.onrender.com/api/v1/user/admin/logout",
      { withCredentials: true }
    );

    toast.success(res.data.message || "Logged out successfully");
  } catch (err) {
    toast.error(
      err.response?.data?.message || "Logout request failed"
    );
  }
};
  const links = [
    { label: "HOME", icon: TiHome, onClick: () => go("/") },
    { label: "DOCTORS", icon: FaUserDoctor, onClick: () => go("/doctors") },
    { label: "ADD DOCTOR", icon: MdAddModerator, onClick: () => go("/admin/addnew") },
    { label: "ADD ADMIN", icon: IoPersonAddSharp, onClick: () => go("/doctor/addnew") },
    { label: "MESSAGE", icon: AiFillMessage, onClick: () => go("/messages") },
    { label: "LOGOUT", icon: RiLogoutBoxFill, onClick: handleLogout, danger: true },
  ];

  return (
    <nav
      className={`${
        !isAuthenticated ? "hidden" : "block"
      } bg-white shadow-md sticky top-0 z-50 w-full`}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
        <Link to="/" onClick={() => setIsOpen(false)} className="shrink-0">
          <img
            src="/logo.png"
            alt="ZeeCare"
            className="w-24 sm:w-28 lg:w-32 h-auto"
          />
        </Link>

        {/* Full links: laptop and up */}
        <div className="hidden lg:flex items-center lg:gap-4 xl:gap-8">
          {links.map(({ label, icon: Icon, onClick, danger }) => (
            <button
              key={label}
              onClick={onClick}
              className={`flex items-center gap-2 text-gray-700 transition-colors ${
                danger ? "hover:text-red-500" : "hover:text-blue-500"
              }`}
            >
              <Icon className="text-xl xl:text-2xl" />
              <span className="text-sm xl:text-lg font-medium whitespace-nowrap">
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* Hamburger: phone and tablet */}
        <button
          className="lg:hidden text-gray-800 text-2xl p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Dropdown: phone and tablet */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] border-t border-gray-200" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-4 sm:px-6 py-2 bg-white">
          {links.map(({ label, icon: Icon, onClick, danger }) => (
            <button
              key={label}
              onClick={onClick}
              className={`flex items-center gap-3 py-3 text-left text-gray-700 border-b border-gray-100 last:border-b-0 transition-colors ${
                danger ? "hover:text-red-500" : "hover:text-blue-500"
              }`}
            >
              <Icon className="text-xl" />
              <span className="text-base font-medium">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;