import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';


const Login = () => {
    const {setIsLogin,setUserDetail,isLogin,userDetail} = useContext(UserContext)
    const navigate = useNavigate()
    const [loginForm,setLoginForm] = useState({
        username:"",
        password:""
    })

    useEffect(() => {
        if(isLogin){
           
            navigate('/')
        }
    },[isLogin])

    const loginSubmit = async(e) => {
        e.preventDefault()
        let stringifyData = JSON.stringify(loginForm)
        await localStorage.setItem('loginDetail',stringifyData)
        setUserDetail(stringifyData)
        setIsLogin(true)
        navigate('/')
    }

    const handleChange = (event) => {
        const {name,value} = event.target;
        setLoginForm(prev => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className='container'>
        <form onSubmit={loginSubmit} className="row g-3">
        <div className="col-md-6 col-sm-6">
          <label htmlFor="validationDefault01" className="form-label">Name</label>
          <input type="text" name="username" value={loginForm.username} onChange={handleChange} className="form-control" id="validationDefault01" placeholder='Enter username' required />
        </div>
        <div className="col-md-6 col-sm-6">
          <label htmlFor="validationDefault02" className="form-label">Password</label>
          <input type="password" name="password" value={loginForm.password} onChange={handleChange} className="form-control" id="validationDefault02" placeholder='Enter password' required />
        </div>
        <div className="col-12">
          <button className="btn btn-info" type="submit">Log in </button>
        </div>
      </form>
      </div>
      
    );
}

export default Login;