import React from 'react'

const TodoItem = ({ todo, onDelete }) => {
      return (
            <div className='my-2'>
                  <h4>{todo.title}</h4>
                  <p>{todo.desc}</p>
                  <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
            </div>
      )
}

export default TodoItem
