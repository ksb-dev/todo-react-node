import axios from 'axios'

export const deleteTask = async (id, getTasks, setError) => {
  try {
    const response = await axios.delete(`/api/v1/tasks/${id}`)

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
