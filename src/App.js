import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AuthContext from "./context/AuthContext";
import './App.css';

function App() {
    const [isAuth, toggleIsAuth] = useState(false);

    return (
      <>
        <NavBar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signIn">
            <SignIn />
          </Route>
          <Route exact path="/signUp">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
