import { useContext, useState } from 'react'
import './login.scss'
import {AuthContext} from '../../context/AuthContext.js'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const [credentials, setCredentials]=useState({
        username:undefined,password:undefined
    })
    const {user,loading,error,dispatch}=useContext(AuthContext)
    const handleChange=(e)=>{
        setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
    }
    const navigate=useNavigate()
    const handleLogin=async(e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})
        try {
            const res=await axios.post("http://localhost:5000/api/auth/login",credentials)
            if(res.data.isAdmin){
                dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
                navigate("/")
            }
            else{
            dispatch({type:'LOGIN_FAILED',payload:{message:"You are not allowed"}})
        }
        } catch (error) {
            dispatch({type:'LOGIN_FAILED',payload:error.response.data})
        }

    }
     return (
    <div className="login">
        <div className="lContainer">
            <input type="text" placeholder="Username" id="username" className="lInput" onChange={handleChange}/>
            <input type="password" placeholder="Password" id="password" className="lInput" onChange={handleChange} />
            <button disabled={loading} onClick={handleLogin} className='lButton'>Login</button>
            {error&& <span>{error.message}</span>}
        </div>

    </div>
  )
}

export default Login;