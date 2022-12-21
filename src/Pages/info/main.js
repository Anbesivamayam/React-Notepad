import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const onClickCreate = () => {
    navigate("/addTodo");
  };

  return (
    <div className="flex flex-col justify-center items-center text-gray-600  text-center h-[calc(100vh_-_148px)] md:h-[calc(100vh_-_156px)]">
      <p className="tracking-[.05em] text-3xl md:text-5xl">Welcome User!</p>
      <p className="w-64 md:w-3/4 tracking-[0.1rem] md:tracking-[0.2rem] text-2xl  my-6">
        "Each day is a treasure chest filled with limitless opportunities take
        joy in checking many off your list.”
      </p>
      <button
        className="tracking-[0.2em] text-white bg-gray-500 border-1 py-3 px-2 hover:bg-gray-700 rounded text-md "
        onClick={onClickCreate}
      >
        CREATE/ADD
      </button>
    </div>
  );
};

export default MainPage;
