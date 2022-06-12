import React, { useState, useRef } from 'react'

// Context
import { useTaskContext } from '../../context/context'

// Hooks
import { updateComplete } from '../../hooks/useUpdateComplete'
import { deleteTask } from '../../hooks/useDeleteTask'

// Components
import EditTask from '../EditTask/EditTask'

const TaskList = ({ tasks }) => {
  const {
    getTasks,
    setError,
    setTaskId,
    setTaskName,
    setTaskCompleted,
    setTaskPriority,
    setTaskDate,
    error
  } = useTaskContext()

  const editTask = useRef(null)

  const getClass = value => {
    if (value === 'low') return 'green'
    if (value === 'medium') return 'orange'
    if (value === 'high') return 'red'
  }

  const showEdit = (id, name, completed, priority, date) => {
    setTaskId(id)
    setTaskName(name)
    setTaskCompleted(completed)
    setTaskPriority(priority)
    setTaskDate(date)

    editTask.current.style.zIndex = '1'
    editTask.current.style.transform = 'scale(1)'
  }

  return (
    <>
      {error && <h4 className='error'>{error}</h4>}

      <EditTask editTask={editTask} />

      <div className='task-list'>
        {tasks.map(task => (
          <div key={task._id} className='task-list__task'>
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

              <span className={`${getClass(task.task_priority)} priority`}>
                {task.task_priority}
              </span>
            </div>

            <div className='second'>
              <span className='name'>{task.task_name}</span>
            </div>

            <div className='third'>
              <span className='date'>
                {task.added_date.substring(8, 10) +
                  '-' +
                  task.added_date.substring(5, 7) +
                  '-' +
                  task.added_date.substring(0, 4)}
              </span>

              <div className='third__inner'>
                <i
                  className='fa-solid fa-pen-to-square edit'
                  onClick={() =>
                    showEdit(
                      task._id,
                      task.task_name,
                      task.is_completed,
                      task.task_priority,
                      task.added_date.substring(0, 10)
                    )
                  }
                ></i>
                <i
                  className='fa-solid fa-trash delete'
                  onClick={() => deleteTask(task._id, getTasks, setError)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TaskList
