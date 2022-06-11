import axios from 'axios'

export const updateTask = async (id, getTasks, setError, boolean) => {
  window.scroll({
    bottom: 0,
    left: 0,
    behavior: 'smooth'
  })

  try {
    const response = await axios.patch(`/api/v1/tasks/${id}`, {
      is_completed: `${boolean}`
    })

    if (response.data) {
      setError('')
      getTasks()
    }
  } catch (error) {
    setError(error.response.data.msg)

    setTimeout(() => {
      setError('')
    }, 3000)
  }
}
