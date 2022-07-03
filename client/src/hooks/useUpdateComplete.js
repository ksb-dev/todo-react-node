import axios from 'axios'

export const updateComplete = async (id, getTasks, setError, boolean) => {
  const token = localStorage.getItem('token')

  // window.scroll({
  //   bottom: 0,
  //   left: 0,
  //   behavior: 'smooth'
  // })

  try {
    let response = await axios.patch(
      `/api/v1/tasks/${id}`,
      {
        is_completed: `${boolean}`
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

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
