import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import {Button} from 'react-bootstrap';

function Admin() {

    const [key, setKey] = useState('home');
    const [activate, setActivate] = useState(true);

    const HandleShowForm = ()=>{
        setActivate(false);
    }
    const HandleHiddenForm = ()=>{
        setActivate(true);
    }

    return(
        <div className='container'>
            <h1 className="mb-4">Tableau de bord de l'administrateur</h1> 
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)}>      
                <Tab eventKey="Inscrit" title="Les Inscrits">
                    <Card>                                  
                        <Card.Body>
                            <Card.Title>Les derniers Inscrits</Card.Title>                   
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item">Pseudo:</li>
                                    <li className="list-group-item">Email:</li>
                                    <li className="list-group-item">Fonction:</li>
                                </ul>
                            <Button className="btn btn-success mr-3" variant="success">Valider ce membre</Button>   <Button className="btn btn-danger" variant="danger">Valider ce membre</Button>                
                        </Card.Body>                
                    </Card>
                </Tab>
                <Tab eventKey="Post" title="Les posts">
                    <Card>                    
                        <Card.Body>
                            <Card.Title>Les derniers posts</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <ul className="list-group">
                                    <li className="list-group-item">Titre:</li>
                                    <li className="list-group-item">Message:</li>
                                    <li className="list-group-item">Image:</li>
                                    <li className="list-group-item">Ecrit par:</li>                               
                                </ul>
                                <div className="list-group-item">
                                    <button className="btn btn-success">Valider le post !</button>
                                </div>
                                
                                <div className="list-group-item">
                                    <button className="btn btn-danger">Supprimer le post !</button>
                                </div>
                                { activate ?
                                <div className="list-group-item">
                                    <button className="btn btn-warning" onClick={HandleShowForm}>modérer le post !</button>
                                </div>
                                :
                                <div>
                                <div className="list-group-item">
                                    <button className="btn btn-danger" onClick={HandleHiddenForm}>Annuler la modération !</button>
                                </div>
                                <div className="list-group-item">
                                    <form >
                                        <div className="form-group">
                                            <textarea className="form-control " required pattern="^[^&amp;'<>@&quot;()!_$*€£`+=\/;?#]+$"  ></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-success">Valider le post de modération !</button>
                                    </form>
                                </div>
                                </div>
                                }
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>
        </div>
    )
    
}

export default Admin;