import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Context
import { useTaskContext } from '../../context/context'

// Hooks
import { updateComplete } from '../../hooks/useUpdateComplete'
import { deleteTask } from '../../hooks/useDeleteTask'

// Components
import Filter from '../Filter/Filter'

const TodoList = ({ tasks, filtered, setTasks }) => {
  const { getTasks, setError, error } = useTaskContext()

  const getClass = value => {
    let lowerCaseValue = value.toLowerCase()

    if (lowerCaseValue === 'low') return 'green'
    if (lowerCaseValue === 'medium') return 'orange'
    if (lowerCaseValue === 'high') return 'red'
  }

  return (
    <>
      {error && <h4 className='error'>{error}</h4>}

      <Filter tasks={tasks} setTasks={setTasks} />

      <div className='task__list'>
        {filtered.map(task => (
          <div key={task._id} className='task__list__task'>
            <div className='one'>
              {!task.is_completed && (
                <span className='pending'>
                  <i
                    className='fa-regular fa-square'
                    onClick={() =>
                      updateComplete(task._id, getTasks, setError, true)
                    }
                  ></i>
                </span>
              )}

              {task.is_completed && (
                <span className='completed'>
                  <i
                    className='fa-solid fa-square-check'
                    onClick={() =>
                      updateComplete(task._id, getTasks, setError, false)
                    }
                  ></i>
                </span>
              )}
              <span className='date'>
                {task.added_date.substring(8, 10) +
                  '-' +
                  task.added_date.substring(5, 7) +
                  '-' +
                  task.added_date.substring(0, 4)}
              </span>

              <div className='one__inner'>
                <i className='fa-solid fa-circle-info fa-2x info'></i>

                <Link to={`/edit/${task._id}`}>
                  <i className='fa-solid fa-pen-to-square edit'></i>
                </Link>

                <i
                  className='fa-solid fa-trash-can delete'
                  onClick={() => deleteTask(task._id, getTasks, setError)}
                ></i>
              </div>
            </div>

            <div className='two'>
              <span className={`${getClass(task.task_priority)} priority`}>
                {task.task_priority}
              </span>
              <span className='name'>{task.task_name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TodoList
