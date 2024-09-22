import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo, removeTodo } from "../state/features/todoSlice";

export const Todo = () => {
  const [title, setTitle] = useState('');
  const [editId, setEditId] = useState(null);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch(); 

  const handleAddTodo = (e) => {
    e.preventDefault()
    if (title.trim() !== '') {
      dispatch(addTodo(title));
      setTitle('');
    }
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id))
  }
  
  const handleEditSave = (e) => {
    e.preventDefault()
    dispatch(editTodo({id: editId, newTitle: title}))
    setTitle('')
    setEditId(null)
  }

  const handelEditTodo = (id, text) => {
    setTitle(text);
    setEditId(id)
  }

  return (
    <div>
     <h3>Todo List:</h3>
     <form >
      <label htmlFor="">Add a new todo: </label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      {!editId && <button onClick={handleAddTodo}>Add Todo</button>}
      {editId && <button onClick={handleEditSave} >Save</button>}
     </form>
     <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => handelEditTodo(todo.id, todo.title)}>Edit</button>
          <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
        </li>
      ))}
     </ul>
    </div>
  )
}
