import React, { useEffect, useState } from "react";

const View = ({
  addItems,
  setAddItems,
  handleEditClick,
  handleEditFormChange,
  handleUpdateClick,
  isEdit,
  setIsEdit,
  addTodo,
  setAddTodo,
  editTodo,
  setEditTodo,
}) => {
  // Delete Button ****************
  const deleteList = (id) => {
    const newTodos = addItems.filter((plzWork) => {
      return plzWork.id !== id;
    });
    setAddItems(newTodos);
  };

  const onCancelClick = () => {
    setIsEdit(false);
  };

  // Ternary Operator
  // {
  //   Condition(When its true) ? "This Happens" : "Else this happpen"
  // }

  return (
    <div>
      <section className="grid grid-cols-4 gap-2 mt-2  ">
        {addItems.map((todo) => {
          return (
            <div key={todo.id} className="bg-gray-200 bg-opacity-75  p-3 m-2">
              <li className="p-1">{todo.todo}</li>

              <div className="text-center ">
                <button
                  className="text-white bg-green-500 border-1 py-2 md:py-2 px-2 md:px-4 hover:bg-green-700 rounded text-sm  mx-3 tracking-[0.1em]"
                  onClick={() => handleEditClick(todo)}
                >
                  EDIT
                </button>
                <button
                  className="text-white bg-red-500 border-1 py-2 md:py-2 px-2 md:px-4 hover:bg-red-700 rounded text-sm  mx-3 tracking-[0.1em]"
                  onClick={() => deleteList(todo.id)}
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </section>
      {isEdit ? ( // eDIT iNPUT
        <input
          name="todo"
          value={editTodo.todo}
          onChange={handleEditFormChange}
        />
      ) : null}
      {isEdit ? (
        <button
          className="text-white bg-green-500 border-1 py-2 md:py-2 px-2 md:px-4 hover:bg-green-700 rounded text-sm  mx-3 tracking-[0.1em]"
          // onClick={() => editList(todo.name)}
          onClick={() => handleUpdateClick(editTodo.todo)}
        >
          Update
        </button>
      ) : null}
      {isEdit ? (
        <button
          className="text-white bg-red-500 border-1 py-2 md:py-2 px-2 md:px-4 hover:bg-red-700 rounded text-sm  mx-3 tracking-[0.1em]"
          onClick={() => onCancelClick()}
        >
          Cancel
        </button>
      ) : null}
    </div>
  );
};

export default View;
