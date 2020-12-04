import React from 'react';
import { Link, NavLink } from "react-router-dom";
import image from '../Images/icon-above-font.png';

function Menu() {
    return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2">
                <Link className="navbar-brand ml-3" to="/"><img src= {image} alt="logo"/></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/"><button className="btn btn-primary">Accueil</button>
                            <span className="sr-only">(current)</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inscription"><button className="btn btn-primary">Inscription</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/forum"><button className="btn btn-primary">Forum</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profil"><button className="btn btn-primary">Mon profil</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin"><button className="btn btn-primary">Admin</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#"><button className="btn btn-primary">Deconnection</button></Link>
                        </li>    
                    </ul>                   
                </div>
            </nav>
    )
}
export default Menu;