import React from 'react'

// Context
import { useTaskContext } from '../../context/context'

// Hooks
import { updateTask } from '../../hooks/useUpdateTask'
import { deleteTask } from '../../hooks/useDeleteTask'

const TaskList = () => {
  const { tasks, getTasks, setError } = useTaskContext()

  const getClass = value => {
    if (value === 'low') return 'green'
    if (value === 'medium') return 'orange'
    if (value === 'high') return 'red'
  }

  return (
    <div className='task-list'>
      {tasks.map(task => (
        <div key={task._id} className='task-list__task'>
          <div className='one'>
            {!task.is_completed && (
              <span className='pending'>
                <i
                  className='fa-regular fa-circle'
                  onClick={() => updateTask(task._id, getTasks, setError, true)}
                ></i>
              </span>
            )}

            {task.is_completed && (
              <span className='completed'>
                <i
                  class='fa-solid fa-circle-check'
                  onClick={() =>
                    updateTask(task._id, getTasks, setError, false)
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
            <span className='date'>{task.added_date.substring(0, 10)}</span>

            <div className='third__inner'>
              <i className='fa-solid fa-pen-to-square edit'></i>
              <i
                className='fa-solid fa-trash delete'
                onClick={() => deleteTask(task._id, getTasks, setError)}
              ></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskList
