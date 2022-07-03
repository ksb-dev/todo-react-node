import axios from 'axios'

export const deleteTask = async (id, getTasks, setError) => {
  const token = localStorage.getItem('token')

  try {
    const response = await axios.delete(`/api/v1/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
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
