import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';

function Inscription() {
    return(
        <div className='container'>
            <h1 className="mb-4">Inscription</h1>
            <Card>                    
                <Card.Body>                   
                         <Form>
                            <Form.Group controlId="formBasicPrenom">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control type="text" autoComplete="true" placeholder="Enter prénom" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" autoComplete="true" placeholder="Entrer email" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Entrer votre mot de passe est sécret" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Sélectionnez votre métier</Form.Label>
                                <Form.Control as="select">
                                <option>Sélectionnez</option>
                                <option>Technicien.ne</option>
                                <option>Chef.e de centre</option>
                                <option>Responsable de secteur</option>
                                <option>Chargé.e de Communication</option>
                                </Form.Control>
                            </Form.Group>
                            <Button className="mr-4" variant="primary" type="submit">
                                Envoyer
                            </Button><Button variant="warning" type="reset">
                                Reset
                            </Button>
                        </Form>                      
                </Card.Body>
            </Card> 
        </div>
    )
    
}

export default Inscription;