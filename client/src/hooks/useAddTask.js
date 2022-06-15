import axios from 'axios'

export const addTask = async (
  name,
  priority,
  description,
  date,
  getTasks,
  setError,
  addForm
) => {
  window.scroll({
    bottom: 0,
    left: 0,
    behavior: 'smooth'
  })

  try {
    const response = await axios.post('/api/v1/tasks', {
      task_name: name,
      task_description: description,
      task_priority: priority,
      added_date: date
    })

    if (response.data) {
      addForm.current.style.zIndex = '-1'
      addForm.current.style.transform = 'scale(0)'

      setError('')
      getTasks()
    }
  } catch (error) {
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
