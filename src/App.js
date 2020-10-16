import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Order from './Components/Customer/Order/Order';
import ServiceList from './Components/Customer/ServiceList/ServiceList';
import Review from './Components/Customer/Review/Review';
import ClientList from './Components/Admin/ClientList/ClientList';
import AddServices from './Components/Admin/AddServices/AddServices';
import AddAdmin from './Components/Admin/AddAdmin/AddAdmin';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const userContext = createContext();
export const serviceContext = createContext();

function App() {

  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: true,
    userName: '',
    userEmail: '',
    error: '',
    success: false
  });

  const [service, setService] = useState({
    image: '',
    title: '',
    description: ''
  })

  return (
    <>
      <userContext.Provider value={[user, setUser]}>
        <serviceContext.Provider value={[service, setService]}>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>

              <PrivateRoute path='/order'>
                <Order />
              </PrivateRoute>

              <Route path='/service-list'>
                <ServiceList />
              </Route>

              <PrivateRoute path="/review">
                <Review />
              </PrivateRoute>

              <PrivateRoute path='/client-list'>
                <ClientList />
              </PrivateRoute>

              <PrivateRoute path='/add-services'>
                <AddServices />
              </PrivateRoute>

              <PrivateRoute path='/add-admin'>
                <AddAdmin />
              </PrivateRoute>

              <Route path='/login'>
                <Login />
              </Route>

              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </serviceContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
