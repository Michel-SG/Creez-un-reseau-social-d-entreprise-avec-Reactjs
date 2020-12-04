import React from 'react';
import './AccueilComponent.css';

function Accueil() {
    return(
        <div className='container'>
            <h1 >Vueillez vous connecter</h1>
             <form >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="Size">Email</label>
                    <input type="email" placeholder ="Saisissez votre adresse mail..." className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" >Password</label>
                    <input type="password" placeholder="Saisissez votre mot de passe..."  className="form-control" id="exampleInputPassword1" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
             </form>
        </div>
    )
    
}

export default Accueil;