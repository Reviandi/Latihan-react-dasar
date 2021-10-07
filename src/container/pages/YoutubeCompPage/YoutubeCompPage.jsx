import React, { Component, Fragment } from "react";
import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";
class YoutubeCompPage extends Component {
    render(){
        return(
            <Fragment>
                <p>YouTube Component</p>
                <hr/>
                <YoutubeComp 
                    time="1.51"
                    tittle="Vaksinasi Covid 19 - 1"
                    desc="5x ditonton. 2 hari yang lalu"/>
                <YoutubeComp 
                    time="2.31"
                    tittle="Vaksinasi Covid 19 - 2"
                    desc="50x ditonton. 7 hari yang lalu"/>
                <YoutubeComp 
                    time="3.41" 
                    tittle="Vaksinasi Covid 19 - 3"
                    desc="70x ditonton. 1 bulan yang lalu"/>
                <YoutubeComp 
                    time="5.51" 
                    tittle="Vaksinasi Covid 19 - 4"
                    desc="1k ditonton. 2 bulan yang lalu"/>
                <YoutubeComp /> 
            </Fragment>
        )
    }
}

export default YoutubeCompPage;