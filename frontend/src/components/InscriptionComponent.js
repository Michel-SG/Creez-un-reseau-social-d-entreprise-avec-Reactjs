import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import axios from 'axios';

function Inscription() {
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [level, setLevel]= useState("");

    const history = useHistory();


    /*const User = {
        userName: name,
        email: email,
        passWord: password,
        level: level 
    }
    const HandleRecul= ()=>{
        console.log(User.level)
    }*/
    const HandleSubmit = (e)=>{
        e.preventDefault();
        if(!name && !email && !password && !level){
            return;
        }
        axios.post('http://localhost:3000/api/user/signup',{
            pseudo: name,
            email: email,
            password: password,
            level: level,        
        })
        .then((response)=>{
            if(response.status===200 && response.data.id){
            localStorage.setItem("RedirectMessage", "signup success, you should connect yourself ");
            history.push('/');
            }else{
               localStorage.setItem("RedirectMessage", "signup failed "); 
            }
        })
        .catch((error)=>console.log("pas envoyé"))
    }
    const onReset = (e)=>{
        e.preventDefault();
        setName("");
        setEmail("");
        setPassword("");
        setLevel("");

    }



    return(
        <div className='container'>
            <h1 className="mb-1">Inscription</h1>
            <Card>                    
                <Card.Body>                   
                    <Form onSubmit={HandleSubmit}>
                        <Form.Group controlId="formBasicPrenom" >
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control type="text" autoComplete="true" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter prénom" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" autoComplete="true"  value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder="Entrer email" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="Entrer votre mot de passe est sécret" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Sélectionnez votre métier</Form.Label>
                            <Form.Control as="select" required  value={level} onChange={(e)=>setLevel(e.target.value)}>
                                <option value=''>Sélectionnez</option>
                                <option value='1'>Technicien.ne</option>
                                <option value='2'>Chef.e de centre</option>
                                <option value='3'>Responsable de secteur</option>
                                <option value='4'>Chargé.e de Communication</option>
                            </Form.Control>
                        </Form.Group>
                        <Button className="mr-4"   variant="primary" type="submit">
                                Envoyer
                        </Button><Button variant="warning" onClick={onReset} type="reset">
                                Reset
                        </Button>
                    </Form>                      
                </Card.Body>
            </Card> 
        </div>
    )
    
}

export default Inscription;