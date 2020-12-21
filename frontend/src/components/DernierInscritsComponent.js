
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import axios from 'axios';

function DerniersInscrits() {

    const [inscrits, setInscrits] = useState([]);
    const [message, setMessage] = useState('');
    
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

    const HandleSetupUser = (index, id)=>{
        axios.put('http://localhost:3000/api/admin/setupSignup/' +id,{hello: 'world'},{
                headers: {
                    authorization: localStorage.authUserToken
                }
            })  
            .then((response)=> {
                if(response.status === 200){
                    setMessage("Le membre a bien été enregistré..."); 
                    const inscrit = inscrits.slice();                   
                    inscrit.splice(index,1); 
                    setInscrits(inscrit);
                }else{
                    localStorage.setItem("messageNav", "Erreur dans la validation !");
                }
            })
            .catch(erreur => console.log(erreur));    
        
    }

    const HandleDeleteUser = (index, id)=>{
        console.log('ça marche')
        axios.delete('http://localhost:3000/api/user/profil/'+id,{
                headers: {
                    authorization: localStorage.authUserToken
                }
            })  
            .then((response)=> {
                if(response.status === 200){
                    setMessage("Le membre a bien été supprimé..."); 
                    const inscrit = inscrits.slice();                   
                    inscrit.splice(index,1);
                    setInscrits(inscrit);
                }else{
                    localStorage.setItem("messageNav", "Erreur dans la validation !");
                }
            })
            .catch(erreur => console.log(erreur));    
        
    }

    return(
        <div className='container'>
       
            { inscrits.map((member,index)=>( 
                    <Card key={member.id}>                                 
                        <Card.Body >
                            <p>{message} </p>
                            <Card.Title>Les derniers Inscrits</Card.Title>                   
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item">Pseudo: {member.pseudo}</li>
                                    <li className="list-group-item">Email: {member.email}</li>
                                    <li className="list-group-item">Fonction: {member.metier}</li>
                                </ul>
                            <Button className="btn btn-success mr-3" variant="success" onClick={()=>HandleSetupUser(index,member.id)}>Valider ce membre</Button>   <Button className="btn btn-danger" variant="danger" onClick={()=>HandleDeleteUser(index,member.id)}>Supprimer ce membre</Button>                
                        </Card.Body>                                      
                    </Card>
                    ))} 
        </div>
    )

}
export default DerniersInscrits;