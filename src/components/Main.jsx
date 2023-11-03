import '../styles/Main.css';
import React from 'react';
import Card from './Card';
import data from '../data.js';

function Main(){

    const journalData = data.map(location => <Card key={location.id} {...location}/> )
    
    return(
        <main className="main-container">
            {journalData}
        </main>
    )
}

export default Main;