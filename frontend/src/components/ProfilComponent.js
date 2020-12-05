import React from 'react';
import Card from 'react-bootstrap/Card';
import './ProfilComponent.css';

function Profil() {
    return(
        <div className='container'>
            <h1 className="mb-4">Mon profil</h1>
            <Card>                    
                <Card.Body> 
            <ul className="list-group">
                <li className="list-group-item">Pseudo:</li>
                <li className="list-group-item">Email:</li>
                <li className="list-group-item">Fonction:</li>
                <div className="list-group-item">
                    <button className="btn btn-danger">Supprimer mon compte</button>
                </div>
            </ul>
            </Card.Body>
            </Card>
        </div>
    )
    
}

export default Profil;