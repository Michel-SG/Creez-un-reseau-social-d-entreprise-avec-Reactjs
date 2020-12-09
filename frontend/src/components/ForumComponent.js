import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Forum() {

    const [active, setActive] = useState(true);
    const [wallPosts, setWallPosts] = useState([]);


    useEffect(()=>{
        const HandlDisplayWall = ()=>{
            axios.get('http://localhost:3000/api/wall/',{
                headers: {
                    authorization: localStorage.authUserToken
                }
            })
            .then((response)=>{
                if(response.status === 200){
                    setWallPosts(response.data);
                }
            })
            .catch(error=>console.log(error))
        }
        HandlDisplayWall();
    },[])

    const HandleDownload = ()=>{
        setActive(false);
    }
    const HandleBack = ()=>{
        setActive(true);
    }

    return(
        <div className='container'>
            <h1 className="mb-4">Forum des posts</h1>
            { active ?
            <div className="wallButton mb-3">            
                <button type="button" className="btn btn-info " onClick={HandleDownload} >Créer un post</button>
             </div>
             
             :<div className="wallButton mb-3">     
                <button type="button" className="btn btn-danger" onClick={HandleBack} >Annuler le post</button>               
            </div>}
            { active === false && 
            <div className="wallForm mb-3" >
                <form >
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Titre:</span>
                        </div>
                        <input type="text" className="form-control" autoComplete="true" pattern="^[^&amp;'<>@&quot;()!_$*€£`+=\/;?#]+$" />
                    </div>
                    <div className="input-group mb-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Texte:</span>
                        </div>
                        <textarea className="form-control " autoComplete="true" pattern="^[^&amp;'<>@&quot;()!_$*€£`+=\/;?#]+$"  ></textarea>
                    </div>
                    <div >
                        <h4>Ajouter une image</h4><br />
                        <input type="file"/>
                    </div>
                    
                    <div className="mb-4">
                        <br />
                        <button >Supprimer l'image</button>
                    </div>
                    <button className="btn btn-success" type="submit">Poster et voir sur le WALL !</button>
                </form>   
            </div> }
            { wallPosts.map((post)=>(
            <article className="articlePost" key={post.id}>
                <ul className="list-group">
                    <li className="list-group-item text-center">{post.title}</li>
                    <li className="list-group-item text-right">Ecrit par: {post.userPseudo}</li>
                    <li className="list-group-item">
                        <div className="post-element text-center" >{post.content}</div>
                    </li>
                    <li className="list-group-item text-center">
                        <div className="post-element" ><img src= {post.urlImage} alt="ImageDuPost"/></div>
                    </li>
                </ul>
            </article>
            ))} 
        </div>
    )
    
}

export default Forum;