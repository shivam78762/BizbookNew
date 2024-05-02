import React from 'react'

const Logout = () => {

    localStorage.removeItem("userName");
      window.location.href = "/";
  return (
    <div>
      
    </div>
  )
}

export default Logout
