import React, { useContext } from 'react'
import { TodoContext } from "../Context/TodoContext"

const TodoList = () => {

    const {todo, setTodo} = useContext(TodoContext);
  return (
    <table className="table-auto w-full">
        <th>Title</th>
        <th>Description</th>
        <th>Completed</th>
        <th>View</th>
        <th>Update</th>
        <th>Delete</th>
    </table>
  )
}

export default TodoList