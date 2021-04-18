import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Admin from './Components/Admin/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Order/Order';
import AddServices from './Components/Admin/AddServices/AddServices';
import UserServicesList from './Components/Admin/UserServicesList/UserServicesList';
import AllServicesList from './Components/Admin/AllServicesList/AllServicesList';
import UserReview from './Components/Admin/UserReview/UserReview';
import ManageServices from './Components/Admin/ManageServices/ManageServices';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';



export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute  path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route  path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route  path="/review">
           <UserReview></UserReview>
          </Route>
          <Route  path="/manageServices">
           <ManageServices></ManageServices>
          </Route>
          <Route  path="/allServicesList">
            <AllServicesList></AllServicesList>
          </Route>
          <Route  path="/userServicesList">
            <UserServicesList></UserServicesList>
          </Route>
          <Route  path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <PrivateRoute  path="/order/:id">
            <Order></Order>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
