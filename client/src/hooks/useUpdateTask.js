import axios from 'axios'

export const updateTask = async (
  id,
  getTasks,
  setError,
  input,
  description,
  priority,
  date
) => {
  window.scroll({
    bottom: 0,
    left: 0,
    behavior: 'smooth'
  })

  try {
    let response = await axios.patch(`/api/v1/tasks/${id}`, {
      task_name: input,
      task_description: description,
      task_priority: priority,
      added_date: date
    })

    if (response.data) {
      setError('')
      getTasks()
    }

    return response.data
  } catch (error) {
    setError(error.response.data.msg)

    setTimeout(() => {
      setError('')
    }, 3000)
  }
}
