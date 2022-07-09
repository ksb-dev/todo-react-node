import React, { useState, useEffect, useCallback, useContext } from 'react'
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

  const [filteredTasks, setFilteredTasks] = useState([])
  const [filteredPending, setFilteredPending] = useState([])
  const [filteredCompleted, setFilteredCompleted] = useState([])
  const [filteredUpcoming, setFilteredUpcoming] = useState([])

  const [user, setUser] = useState('')
  const [token, setToken] = useState('')

  const getTasks = useCallback(async () => {
    const userToken = localStorage.getItem('token')
    setToken(token)

    setLoading(true)

    try {
      const response = await axios.get('/api/v1/tasks', {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      })

      if (response.data.tasks) {
        // All Tasks
        setTasks(response.data.tasks)
        setFilteredTasks(response.data.tasks)

        // Complteted Tasks
        const completedTasks = response.data.tasks.filter(
          task => task.is_completed === true
        )

        setCompleted(completedTasks)
        setFilteredCompleted(completedTasks)

        // Pending Tasks
        const pendingTasks = response.data.tasks.filter(
          task => task.is_completed === false
        )

        setPending(pendingTasks)
        setFilteredPending(pendingTasks)

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

          if (newDay < nowDay && newMonth > nowMonth && year >= nowYear) {
            return task
          }

          if (newDay > nowDay && newMonth >= nowMonth && year >= nowYear) {
            return task
          }
        })

        setUpcoming(upcomingTasks)
        setFilteredUpcoming(upcomingTasks)

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
  }, [token])

  useEffect(() => {
    // Get user
    const userName = localStorage.getItem('name')
    setUser(userName)

    console.log(userName)

    if (userName !== null) {
      getTasks()
    }
  }, [user, getTasks])

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
        completed,
        setCompleted,
        pending,
        setPending,
        upcoming,
        setUpcoming,
        filteredTasks,
        setFilteredTasks,
        filteredPending,
        setFilteredPending,
        filteredCompleted,
        setFilteredCompleted,
        filteredUpcoming,
        setFilteredUpcoming,
        user,
        setUser,
        token,
        setToken
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
