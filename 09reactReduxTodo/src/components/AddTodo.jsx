import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addTodo , updateTodo } from '../features/todo/todoSlice';
import e from 'cors';

const AddTodo = () => {
  const [input , setInput] = useState("") ;
  const [isUpdating, setisUpdating] = useState(false);
  const [currTodoId, setCurrTodoId] = useState(null)

  const dispatch = useDispatch();
  const todos  = useSelector(state=>state.todo.todos)

  useEffect(() => {
    if (currTodoId !== null) {
        const todo = todos.find(todo => todo.id === currTodoId);
        if (todo) {
            setInput(todo.text);
            setisUpdating(true);
        }
    }
}, [currTodoId, todos]);

  const addOrUpdate = (e)=>{
    e.prevent.Default();
    if(isUpdating){
      dispatch(updateTodo({
        id: currTodoId,
        text: input
      }))
      setisUpdating(false);
      setCurrTodoId(null);
    }
    else{
      dispatch(addTodo(input));
    }
    setInput("");
  }
  return (
    <form onSubmit={addOrUpdate} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {isUpdating ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  )
}

export default AddTodo