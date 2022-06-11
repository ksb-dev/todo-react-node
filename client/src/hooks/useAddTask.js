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

    console.log(1)

    if (response.data) {
      console.log(2)

      setError('')
      getTasks()
    }
    console.log(3)
  } catch (error) {
    console.log(4)

    setError(error.response.data.msg.substring(35))

    console.log(error.response.data.msg.substring(35))

    setTimeout(() => {
      setError('')
    }, 3000)
  }
}
