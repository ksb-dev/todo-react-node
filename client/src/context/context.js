import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [error, setError] = useState('')
  const [tasks, setTasks] = useState([])
  const [pending, setPending] = useState([])
  const [completed, setCompleted] = useState([])
  const [upcoming, setUpcoming] = useState([])
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
        // All Tasks
        setTasks(response.data.tasks)

        // Complteted Tasks
        const completedTasks = response.data.tasks.filter(
          task => task.is_completed === true
        )

        setCompleted(completedTasks)

        // Pending Tasks
        const pendingTasks = response.data.tasks.filter(
          task => task.is_completed === false
        )

        setPending(pendingTasks)

        // Upcoming Tasks
        const upcomingTasks = response.data.tasks.filter(task => {
          let year = task.added_date.substring(0, 4)
          let month = task.added_date.substring(5, 7)
          let day = task.added_date.substring(8, 10)

          let newMonth = month.startsWith(0)
            ? month.substring(1)
            : month.substring(0)
          let newDay = day.startsWith(0) ? day.substring(1) : day.substring(0)

          let nowYear = new Date().getFullYear()
          let nowMonth = new Date().getMonth()
          let nowDay = new Date().getDate()

          console.log(year, nowYear)
          console.log(year >= nowYear)
          console.log(newMonth, nowMonth + 1)
          console.log(newMonth >= nowMonth + 1)
          console.log(newDay, nowDay)
          console.log(newDay > nowDay)
          console.log('-----------------')

          if (newDay < nowDay && newMonth > nowMonth && year >= nowYear) {
            return task
          }

          if (newDay > nowDay && newMonth >= nowMonth && year >= nowYear) {
            return task
          }
        })

        setUpcoming(upcomingTasks)

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
        setPending,
        upcoming,
        setUpcoming
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
