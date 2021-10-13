import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignUp() {
    const {signUp} = useContext(AuthContext)

  return (
    <>
      <h1>Sign Up</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
      <form>
          <div className="imagecontainer">
              <center>
                  <img src={logo} width="50px" height="50px" alt="logo"/>
                  <img src={logo} width="50px" height="50px" alt="logo"/>
                  <img src={logo} width="50px" height="50px" alt="logo"/>
              </center>
          </div>
          <div className="container">
              <label htmlFor="username"><b>Username</b></label>
              <input type="text" placeholder="Username" name="username" required/>
              <label htmlFor="password"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="password" required/>
              <label htmlFor="email"><b>Email</b></label>
              <input type="email" placeholder="Enter Email" name="email" required/>

              <button type="submit"
                      onClick={signUp}
              >Register
              </button>
          </div>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signIn">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;