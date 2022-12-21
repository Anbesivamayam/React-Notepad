import React from "react";
import { useNavigate } from "react-router-dom";
// import Colors from "../assets/Colors";

const Navbar = () => {
  const navigate = useNavigate();

  const onAddClick = () => {
    navigate("/addTodo");
  };
    const onClickHome = () =>{
      navigate("/")
    }
    const viewPage = () =>{
      navigate("/viewTodo")
    }
  

  return (
    <div className="flex justify-between items-center bg-gray-600 p-4 py-4">
      <div className="text-lg text-amber-100 cursor-pointer" onClick={onClickHome}>LOGO</div>
      <div className="">
        <button className="text-white bg-indigo-500 border-1 py-2 md:py-2 px-2 md:px-4 hover:bg-indigo-700 rounded text-sm  mx-3 tracking-[0.1em]"
        onClick={viewPage}>
          VIEW
        </button>
        <button
          onClick={onAddClick}
          className="text-white bg-indigo-500 border-1 py-2 md:py-2 px-2 md:px-4 hover:bg-indigo-700 rounded text-sm tracking-[0.1em]"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default Navbar;
