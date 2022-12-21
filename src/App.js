import logo from "./logo.svg";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import "./App.css";
import Form from "./components/Form";
import Navbar from "./components/navbar";
import MainPage from "./Pages/info/main";
import AddPage from "./Pages/add/add";
import View from "./Pages/display/view";
import { useState } from "react";

const App = () => {
  const [addItems, setAddItems] = useState([]);

  const [addTodo, setAddTodo] = useState({
    id: "",
    todo: "",
  });

  const [editTodo, setEditTodo] = useState({
    id: "",
    todo: "",
  });

  const [todoId, setTodoId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    // console.log("fieldName", fieldName);
    // console.log("fieldValue", fieldValue);

    const newFormData = { ...addTodo };
    newFormData[fieldName] = fieldValue;
    
    setAddTodo(newFormData);
    
  };

  const handleEditFormChange = (e) => {
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    // console.log("fieldName", fieldName);
    // console.log("fieldValue", fieldValue);

    const newFormData = { ...editTodo };
    newFormData[fieldName] = fieldValue;

    setEditTodo(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    // console.log(addTodo.todo);
    const newTodo = {
      id: new Date().getTime().toString(),
      todo: addTodo.todo,
    };
    const newTodos = [...addItems, newTodo];
    setAddItems(newTodos);
    // console.log(addItems);
  };

  const handleEditClick = (todo) => {
    setTodoId(todo.id);

    const newEditTodo = {
      id: todo.id,
      todo: todo.todo,
    };
    setEditTodo(newEditTodo);
    setIsEdit(true);
  };
  const handleUpdateClick = (todo) => {
    setTodoId(todo.id);

    const updatedTodo = {
      id: todo.id,
      todo: editTodo.todo,
    };
    const newUpdateTodos = [...addItems];

    const index = addItems.findIndex((todo) => todo.id === todoId);

    newUpdateTodos[index] = updatedTodo;

    setAddItems(newUpdateTodos);
    setTodoId(null)
    setIsEdit(false);
  };

  return (
    <div className="App h-screen ">
      <div>
        <Navbar />
      </div>
      <div>
        <h1 className="mt-2 text-gray-600  text-center font-semibold text-4xl md:text-5xl">
          TO-DO LIST
        </h1>
      </div>
      {/* {JSON.stringify(todoId)}
      {JSON.stringify(editTodo)} */}

      <div className="">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/addTodo"
            element={
              <AddPage
                addItems={addItems}
                setAddItems={setAddItems}
                handleAddFormChange={handleAddFormChange}
                handleAddFormSubmit={handleAddFormSubmit}
              />
            }
          />
          <Route
            path="/viewTodo"
            element={
              <View
                addItems={addItems}
                setAddItems={setAddItems}
                handleEditClick={handleEditClick}
                handleEditFormChange={handleEditFormChange}
                handleUpdateClick={handleUpdateClick}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
                addTodo={addTodo}
                setAddTodo={setAddTodo}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
