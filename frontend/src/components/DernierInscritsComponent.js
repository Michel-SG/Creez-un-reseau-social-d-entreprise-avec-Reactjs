
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import axios from 'axios';

function DerniersInscrits() {

    const [inscrits, setInscrits] = useState([]);
    
    useEffect(()=>{
        const HandleDisplayProfile = ()=>{
            axios.get('http://localhost:3000/api/admin/lastSignup/',{
                headers: {
                    authorization: localStorage.authUserToken
                }
            })
            .then((response)=>{
                if(response.status === 200){
                    setInscrits(response.data);
                }
            })
            .catch(error=>console.log(error)); 
        }
        HandleDisplayProfile();
    },[])


    return(
        <div className='container'>
            { inscrits.map((member)=>( 
                    <Card key={member.id}>                                 
                        <Card.Body >
                            <Card.Title>Les derniers Inscrits</Card.Title>                   
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item">Pseudo: {member.pseudo}</li>
                                    <li className="list-group-item">Email: {member.email}</li>
                                    <li className="list-group-item">Fonction: {member.metier}</li>
                                </ul>
                            <Button className="btn btn-success mr-3" variant="success">Valider ce membre</Button>   <Button className="btn btn-danger" variant="danger">Supprimer ce membre</Button>                
                        </Card.Body>                                      
                    </Card>
                    ))} 
        </div>
    )

}
export default DerniersInscrits;