import './navbar.scss'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
const Navbar = () => {
  const {user, dispatch}=useContext(AuthContext)
  const handleLogout=()=>{
dispatch({type:"LOGOUT"})
  }
  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{color:"white",textDecoration:"none"}}> 
            <span className="logo link">trivago</span>
            </Link>
            {!user?<div className="navItems">
                <button className="navButton">Register</button><button className="navButton">Login</button>
            </div>:
            <div className="navItems">
                <button onClick={handleLogout} className="navButton">Logout-{user.username}</button>
            </div>}
        </div>
    </div>
  )
}

export default Navbar