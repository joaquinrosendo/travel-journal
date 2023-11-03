import '../styles/Card.css';
import React from 'react';

function Card(props){
    
    return(
        <div className="card">
            <img src={props.imageUrl} />
            <div className='card--details'>
                <div className="card--location">
                    <i className="card--location--pin fa-solid fa-location-dot"></i>
                    <p className="card--location--country">{props.location}</p>
                    <a href={props.googleMapsUrl} className="card--location--link">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p>{`${props.startDate} - ${props.endDate}`}</p>
                <article>{props.description}</article>
            </div>
        </div>
    )
}

export default Card;