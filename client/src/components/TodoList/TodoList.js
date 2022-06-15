import React, { useRef } from 'react'

// Context
import { useTaskContext } from '../../context/context'

// Hooks
import { updateComplete } from '../../hooks/useUpdateComplete'
import { deleteTask } from '../../hooks/useDeleteTask'

// Components
import EditTodo from '../EditTodo/EditTodo'

const TodoList = ({ tasks }) => {
  const {
    getTasks,
    setError,
    setTaskId,
    setTaskName,
    setTaskCompleted,
    setTaskPriority,
    setTaskDate,
    setTaskDescription,
    error
  } = useTaskContext()

  const editTask = useRef(null)

  const getClass = value => {
    if (value === 'low') return 'green'
    if (value === 'medium') return 'orange'
    if (value === 'high') return 'red'
  }

  const showEdit = (id, name, completed, priority, date, description) => {
    setTaskId(id)
    setTaskName(name)
    setTaskCompleted(completed)
    setTaskPriority(priority)
    setTaskDate(date)
    setTaskDescription(description)

    editTask.current.style.zIndex = '1'
    editTask.current.style.transform = 'scale(1)'
  }

  return (
    <>
      {error && <h4 className='error'>{error}</h4>}

      <EditTodo editTask={editTask} />

      <div className='task__list'>
        {tasks.map(task => (
          <div key={task._id} className='task__list__task'>
            <div className='one'>
              <span className='date'>
                {task.added_date.substring(8, 10) +
                  '-' +
                  task.added_date.substring(5, 7) +
                  '-' +
                  task.added_date.substring(0, 4)}
              </span>

              <div className='one__inner'>
                {!task.is_completed && (
                  <span className='pending'>
                    <i
                      className='fa-regular fa-circle fa-2x'
                      onClick={() =>
                        updateComplete(task._id, getTasks, setError, true)
                      }
                    ></i>
                  </span>
                )}

                {task.is_completed && (
                  <span className='completed'>
                    <i
                      className='fa-solid fa-circle-check fa-2x'
                      onClick={() =>
                        updateComplete(task._id, getTasks, setError, false)
                      }
                    ></i>
                  </span>
                )}

                <i className='fa-solid fa-circle-info fa-2x info'></i>

                <i
                  className='fa-solid fa-pen-to-square edit'
                  onClick={() =>
                    showEdit(
                      task._id,
                      task.task_name,
                      task.is_completed,
                      task.task_priority,
                      task.added_date.substring(0, 10),
                      task.task_description
                    )
                  }
                ></i>

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
