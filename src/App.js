import React, { useState, useEffect, createContext } from 'react';

import './App.css';
import Navigator from './navigator';
export const UserContext = createContext()
const App = () => {

  const [isLogin, setIsLogin] = useState(false)
  const [userDetail, setUserDetail] = useState(null)
  let updateUserDetail = localStorage.getItem('loginDetail')
  useEffect(() => {
    if (updateUserDetail) {
      setIsLogin(true)
      setUserDetail(updateUserDetail)
    } else {
      setIsLogin(false)
    }
  }, [])

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin, userDetail, setUserDetail }}>
      <Navigator />
    </UserContext.Provider>
  );
}

export default App;
