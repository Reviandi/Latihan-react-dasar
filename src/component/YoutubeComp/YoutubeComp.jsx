import React from "react";
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/an_webp/mJoNBM2Okys/mqdefault_6s.webp?du=3000&sqp=CL_2z4oG&rs=AOn4CLBKtqRinTCmEjEC9npHRNiw5BftPg" alt="Gambar"/>
                <p className="time">{props.time}</p>
            </div>
            <p className="tittle">{props.tittle}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    tittle: 'Tittle Here',
    desc: 'xx ditonton. x hari yang lalu'
}

export default YoutubeComp;