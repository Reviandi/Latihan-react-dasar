//libraries
import React, {Component, Fragment} from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
//pagies
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Produk from "../pages/produk/Produk";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/blogpost/BlogPost";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";
import DetailPost from "../pages/blogpost/detailpost/DetailPost";
//stylies
import './Home.css';

class Home extends Component {
    state = {
        showComponent: true
    }
    render(){ 
        return(
           <BrowserRouter>
           <Fragment>
            <div className="navigation">
                <Link to="/">Blog Post</Link>
                <Link to="/produk">Produk</Link>
                <Link to="/lifecycle">Lifecycle</Link>
                <Link to="/youtube">Youtube</Link>
            </div>
            <Route path="/" exact component={BlogPost}/>
            <Route path="/detail-post/:postID" component={DetailPost}/>
            <Route path="/produk" component={Produk}/>
            <Route path="/lifecycle" component={LifeCycleComp}/>
            <Route path="/youtube" component={YoutubeCompPage}/>
            </Fragment>
           </BrowserRouter>
        )
    }
}

export default Home;