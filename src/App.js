import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AllProducts from './Components/AllProducts/AllProducts';
import AuthProvider from './Components/Context/AuthProvider/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ProductsDetails from './Components/ProductDetails/ProductsDetails';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Home></Home>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/bikes/:id">
              <ProductsDetails></ProductsDetails>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/bikes">
              <AllProducts></AllProducts><Footer></Footer>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/signup">
              <SignUp></SignUp>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;