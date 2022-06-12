import axios from 'axios'

export const addTask = async (name, priority, date, getTasks, setError) => {
  window.scroll({
    bottom: 0,
    left: 0,
    behavior: 'smooth'
  })

  try {
    const response = await axios.post('/api/v1/tasks', {
      task_name: name,
      added_date: date,
      task_priority: priority
    })

    if (response.data) {
      setError('')
      getTasks()
    }
  } catch (error) {
    setError(error.response.data.msg.substring(35))

    setTimeout(() => {
      setError('')
    }, 3000)
  }
}
