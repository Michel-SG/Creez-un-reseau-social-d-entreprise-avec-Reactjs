import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import  DerniersInscrits  from './DernierInscritsComponent';
import DerniersPosts from './DerniersPostsComponent';


function Admin() {

   
    return(
        <div className='container'>
            <h1 className="mb-4">Tableau de bord de l'administrateur</h1>
            <Tabs defaultActiveKey="inscrit" id="uncontrolled-tab-example">
                <Tab eventKey="inscrit" title="Inscrits">
                    <DerniersInscrits/>
                </Tab>
                <Tab eventKey="Posts" title="Posts">
                    <DerniersPosts/>
                </Tab>
            </Tabs>    
        </div>
    )
    
}

export default Admin;