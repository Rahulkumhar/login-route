import React, { useContext } from 'react';
import { UserContext } from '../App';

const Header = () => {
    const {isLogin,userDetail,setIsLogin} = useContext(UserContext)
    const logout = () => {
        setIsLogin(false)
        localStorage.removeItem('loginDetail')
    }
    return ( 
        <nav className="navbar navbar-info bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div
                        width={30} height={24} className="d-inline-block align-text-top text-white" >
                        {isLogin ? userDetail && JSON.parse(userDetail).username : 'Login first'}
                    </div>
                </a>
                {!isLogin ? <i className="fa fa-sign-in text-white f-24" aria-hidden="true" /> :
                <i onClick={logout} className="fa fa-sign-out text-white f-24" aria-hidden="true" />}
            </div>
        </nav>
     );
}
 
export default Header;