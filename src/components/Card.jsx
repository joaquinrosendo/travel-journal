import '../styles/Card.css';
import React from 'react';

function Card(){
    return(
        <div className="card">
            <img />
            <div className='card--details'>
                <div className="card--location">
                    <i className="card--location--pin fa-solid fa-location-dot"></i>
                    <p className="card--location--country">Japan</p>
                    <p className="card--location--link">View on Google Maps</p>
                </div>
                <h2>Mount Fuji</h2>
                <p>12 Jan, 2021 - 24 Jan, 2021</p>
                <article>
                    Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </article>
            </div>
        </div>
    )
}

export default Card;