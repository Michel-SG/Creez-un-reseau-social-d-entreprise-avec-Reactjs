import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Menu from './components/MenuComponent';
import Connection from './components/ConnectionComponent';
import Admin from './components/AdminComponent';
import ErrorPage from './components/ErrorPageComponent';
import Forum from './components/ForumComponent';
import Inscription from './components/InscriptionComponent';
import Profil from './components/ProfilComponent';
import StoreBoolean from './Hooks/MenuMoveHooks';
import './App.css';

const App = ()=>  {

  const [active, setActive]= useState(true);
  console.log(active)
  
  return (
    <div className="App">
      <BrowserRouter>
       <StoreBoolean.Provider value={[active, setActive]}>
        <Menu/>
       
        <Switch>
          
          <Route exact path='/' component={Connection}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/forum' component={Forum}/>
          <Route path='/inscription' component={Inscription}/>
          <Route path='/profil' component={Profil}/>
          
          <Route component={ErrorPage}/>  
        </Switch> 
        </StoreBoolean.Provider>       
      </BrowserRouter>
    </div>
  );
  
}

export default App;
