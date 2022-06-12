import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [error, setError] = useState('')
  const [tasks, setTasks] = useState([])
  const [pending, setPending] = useState([])
  const [completed, setCompleted] = useState([])
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('all')

  const [taskId, setTaskId] = useState('')
  const [taskName, setTaskName] = useState('')
  const [taskCompleted, setTaskCompleted] = useState(false)
  const [taskPriority, setTaskPriority] = useState('')
  const [taskDate, setTaskDate] = useState('')

  const getTasks = async () => {
    setLoading(true)

    try {
      const response = await axios.get('/api/v1/tasks')

      if (response.data.tasks) {
        setTasks(response.data.tasks)

        const completedTasks = response.data.tasks.filter(
          task => task.is_completed === true
        )

        setCompleted(completedTasks)

        const pendingTasks = response.data.tasks.filter(
          task => task.is_completed === false
        )

        setPending(pendingTasks)

        setLoading(false)
        setError('')
      } else {
        setTasks([])
        setLoading(false)
        setError('Failed to fetch tasks!')
      }
    } catch (error) {
      setTasks([])
      setLoading(false)
      setError('Failed to fetch tasks!')
    }
  }

  useEffect(() => {
    getTasks()
  }, [])

  return (
    <AppContext.Provider
      value={{
        error,
        setError,
        getTasks,
        tasks,
        setTasks,
        loading,
        setLoading,
        category,
        setCategory,
        taskId,
        setTaskId,
        taskName,
        setTaskName,
        taskCompleted,
        setTaskCompleted,
        taskPriority,
        setTaskPriority,
        taskDate,
        setTaskDate,
        completed,
        setCompleted,
        pending,
        setPending
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useTaskContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
