import React, { useContext } from 'react';
import logo from '../assets/banana-01.png';
import { useHistory, Link } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

function NavBar() {
    const history = useHistory();
    const {signOut, isAuth} = useContext(AuthContext)

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            {isAuth === false ?
                <div>
                    <button type="button" onClick={() => history.push('/signIn')}>Log in</button>
                    <button type="button" onClick={() => history.push('/signUp')}>Register</button>
                </div> :
                <button type="button" onClick={() => history.push('/')}>Log Out</button>}
        </nav>
    );
}


export default NavBar;