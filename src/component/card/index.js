import React from "react";
import './index.css'

const Card = (props) => {
    return (
        <div className="box">
            <div className="img-flex">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/1200px-Football_%28soccer_ball%29.svg.png" alt="()"className="football"></img>
                <button className="free">
                    Free
                </button>
            </div>
            <div className="hero">
                <p>
                    Location
                </p>
                <h1>
                    Goggle Earth
                </h1>
            </div>
            <div className="to-flex">
                <p>
                    Rating
                    <p> {props.rating}
                    </p>
                </p>
                <p>
                    Size
                    <p> {props.size}
                    </p>
                </p>
                <p>
                    Downloads
                    <p> {props.downloads}
                    </p>
                </p>
            </div>
        </div>

    )


}
export default Card;