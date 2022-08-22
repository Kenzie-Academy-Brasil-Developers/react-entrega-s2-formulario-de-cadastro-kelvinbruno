import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";

function App() {
  const [user, setUser] = useState({});

  const history = useHistory();

  function logout() {
    setUser({});
    window.localStorage.clear();
    history.push('/')

  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>
        {user.id && (
          <Route exact path="/dashboard">
            <Dashboard logout={logout} user={user} />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;
