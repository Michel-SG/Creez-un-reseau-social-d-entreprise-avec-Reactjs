import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from './components/MenuComponent';
import Connection from './components/ConnectionComponent';
import Admin from './components/AdminComponent';
import ErrorPage from './components/ErrorPageComponent';
import Forum from './components/ForumComponent';
import Inscription from './components/InscriptionComponent';
import Profil from './components/ProfilComponent';
import './App.css';

class App extends Component {

  render(){
  return (
    <div className="App">
      <BrowserRouter>
        <Menu/>
        
        <Switch>
          <Route exact path='/' component={Connection}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/forum' component={Forum}/>
          <Route path='/inscription' component={Inscription}/>
          <Route path='/profil' component={Profil}/>
          <Route component={ErrorPage}/> 
        </Switch>        
      </BrowserRouter>
    </div>
  );
  }
}

export default App;
