import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [error, setError] = useState('')
  const [loadTaskError, setLoadTaskError] = useState('')
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState('all')

  const [taskId, setTaskId] = useState('')
  const [taskName, setTaskName] = useState('')

  const getTasks = async () => {
    setLoading(true)

    try {
      const response = await axios.get('/api/v1/tasks')

      if (response.data.tasks) {
        setTasks(response.data.tasks)
        setLoading(false)
        setLoadTaskError('')
      } else {
        setTasks([])
        setLoading(false)
        setLoadTaskError('Failed to fetch tasks!')
      }
    } catch (error) {
      setTasks([])
      setLoading(false)
      setLoadTaskError('Failed to fetch tasks!')
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
        loadTaskError,
        setLoadTaskError,
        category,
        setCategory,
        taskId,
        setTaskId,
        taskName,
        setTaskName
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
