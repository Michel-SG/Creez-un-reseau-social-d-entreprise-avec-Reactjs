import React from 'react';

function Inscription() {
    return(
        <div className='container'>
            <h1>Inscription</h1>
            <form >
                <div className="form-group">
                    <label htmlFor="exampleInputPrenom1" className="Size">Prénom</label>
                    <input type="text" placeholder ="Saisissez votre prenom..." className="form-control" id="exampleInputPrenom1"  required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="Size">Email</label>
                    <input type="email" placeholder ="Saisissez votre adresse mail..." className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1" >Password</label>
                    <input type="password" placeholder="Saisissez votre mot de passe..."  className="form-control" id="exampleInputPassword1" required pattern="^[^&amp;'<>&quot;()!_$*€£`+=\/;?#]+$"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Sélectionnez votre métier dans l'entreprise...</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                    <option>Sélectionnez</option>
                    <option>Technicien.ne</option>
                    <option>Chef.e de centre</option>
                    <option>Responsable de secteur</option>
                    <option>Chargé.e de Communication</option>   
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button> <button className="btn btn-primary" type="reset" variant="danger">Reset</button>
             </form>
        </div>
    )
    
}

export default Inscription;