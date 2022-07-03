import axios from 'axios'

export const addTask = async (
  name,
  priority,
  description,
  date,
  getTasks,
  setError
) => {
  // window.scroll({
  //   bottom: 0,
  //   left: 0,
  //   behavior: 'smooth'
  // })

  const token = localStorage.getItem('token')

  try {
    const response = await axios.post(
      '/api/v1/tasks',
      {
        task_name: name,
        task_description: description,
        task_priority: priority,
        added_date: date
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    if (response.data) {
      console.log(response.data)
      setError('')
      getTasks()
    }

    return response.data
  } catch (error) {
    console.log(error)
    setError(
      error.response.data.msg.substring(35, 61) +
        ',' +
        error.response.data.msg.substring(80)
    )

    setTimeout(() => {
      setError('')
    }, 3000)
  }
}
