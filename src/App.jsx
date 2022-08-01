import React from 'react';
import { HashRouter,Routes , Route, Navigate} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Detail from './components/Detail';
import './App.css';

function App() {
  return (
    <>
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route path='/detail/:id'>
          <Detail />
        </Route>
        <Navigate to="/" /> 
      </Routes>
    </HashRouter>
    </>
  );
}

export default App;