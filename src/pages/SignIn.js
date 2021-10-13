import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const {signIn} = useContext(AuthContext)

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

            <form>
                <div className="imagecontainer">
                    <center>
                        <img src={logo} width="50px" height="50px" alt="logo"/>
                        <img src={logo} width="50px" height="50px" alt="logo"/>
                        <img src={logo} width="50px" height="50px" alt="logo"/>
                    </center>
                </div>
                <div class="container">
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Username" name="username" required/>
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required/>

                    <button type="submit"
                            onClick={signIn}
                    >Sign In</button>
                </div>
            </form>

            <p>Heb je nog geen account? <Link to="/signUp">Registreer</Link> je dan eerst.</p>
            {/*</div>*/}
        </>
    );
}

export default SignIn;