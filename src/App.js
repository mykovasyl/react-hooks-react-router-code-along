import React from 'react'
import NavBar from './NavBar';
import About from './About';
import Login from './Login';
import SignUp from './SignUp';
import Messages from './Messages';
import Home from './Home';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App