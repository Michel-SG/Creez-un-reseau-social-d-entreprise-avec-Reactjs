import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';

function Admin() {
    return(
        <div className='container'>
            <h1 className="mb-4">Tableau de bord de l'administrateur</h1>          
            <Card>                    
                <Card.Body>
                    <Card.Title>Les Inscrits</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">New</Card.Subtitle>
                        <ul className="list-group">
                            <li className="list-group-item">Pseudo:</li>
                            <li className="list-group-item">Email:</li>
                            <li className="list-group-item">Fonction:</li>
                        </ul>
                    <Button className="btn btn-success mr-3" variant="success">Valider ce membre</Button>   <Button className="btn btn-danger" variant="danger">Valider ce membre</Button>
                </Card.Body>
            </Card>
            <Card>                    
                <Card.Body>
                    <Card.Title>Les derniers posts</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">A lire</Card.Subtitle>
                        <ul className="list-group">
                            <li className="list-group-item">Titre:</li>
                            <li className="list-group-item">Message:</li>
                            <li className="list-group-item">Image:</li>
                            <li className="list-group-item">Ecrit par:</li>                               
                        </ul>
                    <div className="list-group-item">
                        <button className="btn btn-danger">Annuler le post !</button>
                    </div>
                    <div className="list-group-item">
                        <button className="btn btn-warning">modérer le post !</button>
                    </div>
                    <div className="list-group-item">
                        <button className="btn btn-success">Valider le post !</button>
                    </div>
                    <div className="list-group-item">
                        <button className="btn btn-danger">Supprimer le post !</button>
                    </div>
                    <div className="list-group-item">
                        <form >
                            <div className="form-group">
                                <textarea className="form-control " required pattern="^[^&amp;'<>@&quot;()!_$*€£`+=\/;?#]+$"  ></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">Valider le post de modération !</button>
                        </form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
    
}

export default Admin;