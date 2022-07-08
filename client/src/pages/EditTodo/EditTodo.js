import React, { useState, useEffect, useCallback } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

// Context
import { useTaskContext } from '../../context/context'

// Hooks
import { updateTask } from '../../hooks/useUpdateTask'
import { getTask } from '../../hooks/useGetTask'

const EditTodo = () => {
  const { getTasks, error, setError } = useTaskContext()
  const params = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [priority, setPriority] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')

  const getSingleTask = async token => {
    const response = await getTask(params.id, setError, getTasks, token)

    if (response) {
      setName(response.task_name)
      setDescription(response.task_description)
      setPriority(response.task_priority)
      setDate(response.added_date.substring(0, 10))
    }
  }

  useEffect(() => {
    getSingleTask()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    const response = await updateTask(
      params.id,
      getTasks,
      setError,
      name,
      description,
      priority,
      date
    )
    if (response) navigate('/')
  }

  return (
    <>
      {error && <h4 className='error'>{error}</h4>}
      <div className='edit__todo'>
        <div className='edit__todo__inner'>
          <Link to='/' className='edit__todo__inner-back'>
            <i className='fa-solid fa-left-long'></i>
            Back
          </Link>

          <form onSubmit={e => handleSubmit(e)}>
            <h2>Edit Task</h2>
            <div className='edit__todo__inner__input'>
              <label htmlFor='input'>Name</label>

              <input
                id='input'
                type='text'
                className='input'
                placeholder='Max 20 characters'
                onChange={e => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className='edit__todo__inner__description'>
              <label htmlFor='description'>Description</label>
              <textarea
                id='description'
                rows='5'
                cols='50'
                value={description}
                placeholder='Max 250 characters'
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='edit__todo__inner__priority'>
              <label htmlFor='priority'>Priority (low, medium, high)</label>

              <input
                id='priority'
                type='text'
                className='input priority'
                placeholder='Add todo...'
                onChange={e => setPriority(e.target.value)}
                value={priority}
              />
            </div>

            <div className='edit__todo__inner__date'>
              <label htmlFor='date'>Date (yyyy-mm-dd)</label>

              <input
                id='date'
                type='text'
                className='input date'
                onChange={e => setDate(e.target.value)}
                value={date}
              />
            </div>

            <div className='edit__todo__inner__submit'>
              <button type='submit' onSubmit={e => handleSubmit(e)}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditTodo
