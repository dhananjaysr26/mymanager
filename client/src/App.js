import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminAddUser from "./components/AdminAddUser";
import AdminHome from "./components/AdminHome";
import AdminLogin from "./components/AdminLogin";
import AdminUserDetails from "./components/AdminUserDetails";

import Home from "./components/Home"
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile/:profileId" component={Profile} />

          <Route path="/login" component={AdminLogin} />
          <Route path="/admin" component={AdminHome} />
          <Route path="/adduser" component={AdminAddUser} />
          <Route path="/userdetail" component={AdminUserDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App; 