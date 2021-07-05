import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ChatRoom from "./components/chatroom";
import AuthProvider from "./context/AuthProvider";
function App() {
  return (
      <Router>
        <AuthProvider>
        <Switch>
          <Route component={Login} path="/login" />
          <Route component={ChatRoom} path="/chatroom" />
        </Switch>
        </AuthProvider>
      </Router>
  );
}

export default App;
