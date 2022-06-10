import React from 'react'

import user from '../../img/user.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__image__other'>
        <img src={user} alt='user' />
        <p>progress bar</p>
      </div>

      <div className='header__input__date_filter'>
        <div className='input-date'>
          <form className='input-box'>
            <input type='text' className='input' placeholder='Add todo...' />
            <p className='addBtn'>
              <span>
                <i class='fa-solid fa-plus'></i>
              </span>
            </p>
          </form>

          <select name='priority' id='priority' className='priority-box'>
            <option value='priority'>Priority</option>
            <option value='low'>Low</option>
            <option value='high'>High</option>
            <option value='medium'>Medium</option>
          </select>

          <form className='date-box'>
            <input type='date' />
          </form>
        </div>

        <form className='filter-box'>
          <input type='text' className='input' placeholder='Filter todo...' />
          <p className='filterBtn'>
            <span>
              <i class='fa-solid fa-filter'></i>
            </span>
          </p>
        </form>
      </div>

      <div className='header__navigation'>Navigation</div>
    </div>
  )
}

export default Header
