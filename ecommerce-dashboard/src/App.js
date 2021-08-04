import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import AddProduct from './component/AddProduct';
import UpdateProduct from './component/UpdateProduct';
import Login from './component/Login';
import Register from './component/Register';


import { BrowserRouter,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Route path="/add">
        <AddProduct/>
      </Route>   
      
      <Route path="/update">
        <UpdateProduct/>
      </Route> 

      <Route path="/login">
        <Login/>
      </Route> 

      <Route path="/register">
        <Register/>
      </Route> 
      
      </BrowserRouter>   
    </div>
  );
}

export default App;
