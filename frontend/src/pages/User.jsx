import React from 'react'

const User = () => {
    const handelLogout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

  return (
    <div className="user">
        <button className='btn logout__btn' onClick={handelLogout}>Logout</button>
    </div>
  )
}

export default User