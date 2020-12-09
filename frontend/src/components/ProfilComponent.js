import React, { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';
import Context from '../Hooks/MenuMoveHooks';
import axios from 'axios';
import './ProfilComponent.css';

function Profil() {

    const [memberData, setMemberData] = useState([]);
    const [active, setActive] = useContext(Context);
    const history = useHistory();

    useEffect(()=>{
        const HandleGetProfile = ()=>{
        axios.get('http://localhost:3000/api/user/profil/',{
                headers: {
                    authorization: localStorage.authUserToken
                }
            })
        .then(response=>{
            if(response.status ===200){
               setMemberData(response.data)              
            }
        })
        .catch(error=>console.log('erreur'));
        }
        HandleGetProfile();
    },[])
   
    const HandleDeleteProfile = ()=>{
        console.log(active)
        axios.delete('http://localhost:3000/api/user/profil',{
                headers: {
                    authorization: localStorage.authUserToken
                }
            })
            .then((response)=> {
                if(response.status === 200){ // if the verification is ok
                    localStorage.clear(); // clean localstorage
                    setActive(true);
                    history.push('/'); //redirect to the login page
                }  
            })
            .catch(error => console.log(error));
    }

    return(
        <div className='container'>
            <h1 className="mb-4">Mon profil</h1> 
            <Card>                    
                <Card.Body> 
                    {memberData.map(member=>(
                    <ul className="list-group" key={member.id}>
                        <li className="list-group-item" >Pseudo: {member.pseudo} </li>
                        <li className="list-group-item">Email: {member.email}</li>
                        <li className="list-group-item">Fonction: {member.metier}</li>
                        <div className="list-group-item">
                            <button className="btn btn-danger" onClick={HandleDeleteProfile}>Supprimer mon compte</button>
                        </div>
                    </ul>
                    ))}
                </Card.Body>
            </Card>
        </div>
    )
    
}

export default Profil;