import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home"
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;