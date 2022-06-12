import axios from 'axios'

export const updateTask = async (
  id,
  getTasks,
  setError,
  input,
  priority,
  date,
  editTask
) => {
  window.scroll({
    bottom: 0,
    left: 0,
    behavior: 'smooth'
  })

  try {
    let response = await axios.patch(`/api/v1/tasks/${id}`, {
      task_name: input,
      task_priority: priority,
      added_date: date
    })

    if (response.data) {
      setError('')
      getTasks()
      editTask.current.style.zIndex = '-1'
      editTask.current.style.transform = 'scale(0)'
    }
  } catch (error) {
    setError(error.response.data.msg)

    setTimeout(() => {
      setError('')
    }, 3000)
  }
}
