import React from 'react';

function Forum() {
    return(
        <div className='container'>
            <h1 className="mb-4">Forum des posts</h1>
            <div className="wallButton mb-3"> 
                <button type="button" className="btn btn-info mr-4" >Créer un post</button>
                <button type="button" className="btn btn-danger" >Annuler le post</button>
            </div>
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
            </div>
            <article className="articlePost" >
                <ul className="list-group">
                    <li className="list-group-item">Titre:</li>
                    <li className="list-group-item">Ecrit par:</li>
                    <li className="list-group-item">
                        <div className="post-element" >Commentaire</div>
                    </li>
                    <li className="list-group-item">
                        <div className="post-element" >Image</div>
                    </li>
                </ul>
            </article> 
        </div>
    )
    
}

export default Forum;