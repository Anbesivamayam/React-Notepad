import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";

const AddPage = ({
  addItems,
  handleAddFormChange,
  handleAddFormSubmit,
  addTodo,
  setAddTodo,
  editTodo,
  setEditTodo,
}) => {

  // const [clearField, setClearField] = useState("")
 
  // const handleClearField = (e)=>{

  //   setClearField("")
  // }
  // const addList = () => {
  //   const allInput = { id: new Date().getTime().toString(), name: inputValue };
  //   addItems.push(allInput);
  //   // addItems.push(inputValue);
  //   setInputValue("");
  // };
  return (
    <form
      onSubmit={handleAddFormSubmit}
      className="flex flex-col grow justify-center  items-center text-gray-600  text-center h-[calc(100vh_-_148px)] md:h-[calc(100vh_-_156px)]"
    >
      <div className="w-3/4 md:w-2/4 mb-4 mx-auto">
        <input
          type="text"
          name="todo"
          onChange={handleAddFormChange}
          placeholder="Add your list..."
          className="w-full outline-none border border-gray-300 px-2 py-3 text-md rounded-xl active:border-green-500 focus:border-blue-400"
        ></input>
      </div>
      <button
        className="tracking-[0.2em] text-white bg-gray-500 border-1 py-3 px-3 hover:bg-gray-700 rounded text-md first-letter.02em"
       
      >
        ADD
      </button>
      {/* {JSON.stringify(addItems)} */}
    </form>
  );
};

export default AddPage;
