import React from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './ConnectionComponent.css';

function Connection() {

    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data)=>{
        if(!data.email && !data.password){
            return;
        }   
        console.log(data.password)
        axios.post('http://localhost:3000/api/user/login',{
            email: data.email,
            password: data.password
        })
        .then(response=>{     
            if(response.status===200 && response.data.token){
              //  localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('userPseudo', response.data.userPseudo);
                localStorage.setItem('userLevel', response.data.userLevel);
                localStorage.setItem('authUserToken', response.data.token);
                history.push('/forum');

            }else{
                localStorage.setItem("errorMessage", "Adresse mail ou mot de passe incorrect !");                
            }
        })
        .catch(error=>console.log(error));
    }

    return(
        <div className='container'>
            <h1 className="mb-4">Vueillez vous connecter</h1>
            <p>{localStorage.getItem("errorMessage")}</p> 
            <Card>                    
                <Card.Body>  
                         <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Addresse email</Form.Label>
                                <Form.Control type="email" name="email"  ref={register}  placeholder="Enter email" autoComplete="true" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$"/>
                            </Form.Group> 
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" name="password"   ref={register}  placeholder="Password" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$" />
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

export default Connection;