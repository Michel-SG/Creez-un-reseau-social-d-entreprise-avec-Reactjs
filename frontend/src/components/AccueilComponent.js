import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import './AccueilComponent.css';

function Accueil() {
    return(
        <div className='container'>
            <h1 className="mb-4">Vueillez vous connecter</h1>          
            <Card>                    
                <Card.Body>  
                         <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" autoComplete="true" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Envoyer
                            </Button>
                        </Form>                  
                </Card.Body>
            </Card> 
        </div>
    )
    
}

export default Accueil;