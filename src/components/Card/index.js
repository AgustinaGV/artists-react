import React from 'react'
import {Link} from "react-router-dom"

const Card = (props) => {

    const {avatar, genre, name, _id} = props.data;

    return (

        <div className="App-card">
            <div className="App-cardImage">
                <img src={avatar} alt={name} />
            </div>
            <div className="App-cardText">
                <div>
                    <Link to={`/artist/${_id}`} className="App-links">
                        <h2>{name}</h2>
                    </Link>
                    <p>{genre}</p>
                </div>
            </div>
        </div>

    )
}

export default Card