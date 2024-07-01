import React from "react";
import { useState } from "react";
import { TodoContextProvider } from "./contexts/TodoContext";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos , setTodos] = useState([]);
  
  const addTodo = (todo)=>{
    setTodos((prevTodo)=>[{id:Date.now() , ...todo}, ...prevTodo])
  }

  const updateTodo = (id,todo)=>{
    setTodos((prevTodo)=>(
      prevTodo.map((prev)=>(
        prev.id === id? todo : prev
      ))
    ))
  }

  const deleteTodo = (id)=>{
    setTodos((prevTodo)=>(
      prevTodo.filter((prev)=> prev.id!== id)
    ))
  }

  const toggleComplete = (id)=>{
    setTodos((prevTodo)=>(
      prevTodo.map((prev)=>{
        prev.id === id ? {...prev , completed: !completed} : prev
      })
    ))
  }

  useEffect(()=>{
    const localTodo = JSON.parse(localStorage.getItem("todos"));
    if(localTodo && localTodo.length > 0){
      setTodos(localTodo);
    }
  },[])

  useEffect(()=>{
    console.log(todos);
    localStorage.setItem("todos" , JSON.stringify(todos));
  },[todos])


  return (
    <TodoContextProvider value={{todos , addTodo , updateTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-4"><TodoForm/></div>
        <div className="flex flex-wrap gap-y-3">
          {
            todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo = {todo} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
    </TodoContextProvider>
  );
};

export default App;
