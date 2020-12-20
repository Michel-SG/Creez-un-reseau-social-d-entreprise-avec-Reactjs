import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function DerniersPosts(){
    const [lastPosts, setLastPosts] = useState([]);
    const [activate, setActivate] = useState(true);

    useEffect(()=>{
    const HandleDisplayLastPosts = ()=>{ //display last posts
            axios.get('http://localhost:3000/api/admin/lastPosts/',{
                headers: {
                    authorization: localStorage.authUserToken
                }
            })  
            .then(reponse => {
                setLastPosts(reponse.data) //collect the informations about last users
                }) 
            .catch(erreur => console.log(erreur));
        }

        HandleDisplayLastPosts();
     },[])

        const HandleShowForm = ()=>{
            setActivate(false);
        }
        const HandleHiddenForm = ()=>{
            setActivate(true);
        }


    return(
        <div className='container'>
             { lastPosts.map((post)=>(
                    <Card key={post.id}>                    
                        <Card.Body>
                            <Card.Title>Les derniers posts</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                <ul className="list-group">
                                    <li className="list-group-item">Titre:  {post.title}</li>
                                    <li className="list-group-item">Message:  {post.content}</li>
                                    <li className="list-group-item text-center"><img src= {post.urlImage} alt=""/></li>
                                    <li className="list-group-item ml-auto">Ecrit par:  {post.userPseudo}</li>                               
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
                    ))}


        </div>
    )
}

export default DerniersPosts;