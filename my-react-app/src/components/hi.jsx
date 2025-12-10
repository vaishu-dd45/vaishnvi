import React from 'react'
import  "../components/hi.css";
import {Link,NavLink} from "react-router-dom";
const hi = () => {
  return (
    <div className='box'>
      <h1> hellloooo kya kr rhe ho </h1>
      <nav>
        <Link to="/Array">Array</Link>
      </nav>
      <NavLink to="/Memo" style={({isActive}) =>({color:isActive? "red" :"black"})}>MEMO</NavLink>
    </div>
  )
}

export default hi;
