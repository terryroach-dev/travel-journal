import React from "react";
import placeholder from "../images/placeholder.png"

function Card(props) {
    return (
        <div className="card">
            <img src={`./images/${props.item.imageUrl}`} className="card-image" />
            <div className="card-info">
                <div className="location-info">
                    <img src={placeholder} className="placeholder-img" />
                    <h4 className="location-info__location">{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl} className="location-info__link">View on Google Maps</a>
                </div>
                <h2 className="title">{props.item.title}</h2>
                <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
};

export default Card;