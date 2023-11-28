import React from 'react';
function Design(props) {
    return (
        <div className="container">
            <div className="box">
                <div className="photo">
                <img src={props.imgscr} />
            </div>
            <button className="button">
                {props.button}
            </button>
            </div>
                <div>
                <p className="local">{props.local}</p>
                    <h1 className='goggle'> {props.google}</h1>

</div>
                <div className="slide">

                    <div>

                        <h6>{props.rating}</h6>

                        <h4>{props.datarating}</h4>
</div>
<div>
                        <h6>{props.size}</h6>

                        <h4>{props.sizerate}</h4>
</div>
                        <div>

                            <h6> {props.download}</h6>

                            <h4>{props.downloaddata}</h4>

                        </div>

                    </div>

                    <img className='icon' src='img/download.jpg'></img>

                </div>

            
            );
}
export default Design;