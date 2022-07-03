import axios from 'axios'

export const getTask = async (id, setError, getTasks) => {
  const token = localStorage.getItem('token')

  // window.scroll({
  //   bottom: 0,
  //   left: 0,
  //   behavior: 'smooth'
  // })

  try {
    const response = await axios.get(
      `http://127.0.0.1:5000/api/v1/tasks/${id}`,
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

    return response.data.task
  } catch (error) {
    // setError(
    //   error.response.data.msg.substring(35, 61) +
    //     ',' +
    //     error.response.data.msg.substring(80)
    // )

    setTimeout(() => {
      setError('')
    }, 3000)
  }
}
