import React from 'react'

const Filter = ({ tasks, setTasks }) => {
  const filterTasks = e => {
    e.preventDefault()

    let filtered = tasks.filter(task => {
      return task.task_name.toLowerCase().includes(e.target.value.toLowerCase())
    })

    setTasks(filtered)

    // console.log('value', e.target.value)
    // console.log('tasks', tasks)
    // console.log('filtered', filtered)
  }

  return (
    <form className='filter-box' onSubmit={e => filterTasks(e)}>
      <input
        type='text'
        className='input'
        placeholder='Filter'
        onChange={e => filterTasks(e)}
      />
      {/*<p className='filterBtn'>
        <span>
          <i className='fa-solid fa-filter'></i>
  </span>
  </p>*/}
    </form>
  )
}

export default Filter
