import React, { useContext, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Context from '../Hooks/MenuMoveHooks';
import image from '../Images/icon-above-font.png';
import userLogo from '../Images/personIcon.png';



function Menu() {
    
    const [active, setActive] = useContext(Context);
    const [admin, setAdmin] = useState(false);
      /*if(localStorage.authUserToken){
          setActive(false);
      }*/
      if(localStorage.authUserToken && localStorage.userLevel === 4){
          setAdmin(true)
      } 
    
    const history = useHistory();
    const HandleRedirectPage = ()=>{
        localStorage.clear();
        setActive(true);
        history.push('/');
    }
    const userPseudo = localStorage.userPseudo;

    return(  
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2">
                <Link className="navbar-brand ml-3" to="/"><img src= {image} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                 {localStorage.authUserToken &&
                    setActive(false)
                 }
                <div className="collapse navbar-collapse" id="navbarColor01">
                    { active ?
                    <ul className="navbar-nav ml-auto">
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/"><button className="btn btn-primary">Connexion</button>
                            <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inscription"><button className="btn btn-primary">Inscription</button></Link>
                        </li>
                        </ul> : <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="#"><p className="colorName"><img src= {userLogo} alt="userLogo"/>Bonjour { userPseudo }</p></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profil"><button className="btn btn-primary">Mon profil</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forum"><button className="btn btn-primary">Forum</button></Link>
                        </li> 
                        {  admin===false &&                   
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin"><button className="btn btn-primary">Admin</button></Link>
                        </li>
                        }
                        <li className="nav-item">
                            <Link className="nav-link" to="#"><button className="btn btn-primary" onClick = {HandleRedirectPage}>Deconnexion</button></Link>
                        </li>
                          
                    </ul>
                    }                    
                </div>
              
            </nav>
    )
}
export default Menu;