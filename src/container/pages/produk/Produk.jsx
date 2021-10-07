import React, {Component, Fragment} from "react";
import CardProduk from "./cardProduk/CardProduk";
import './Produk.css';

class Produk extends Component {
    state = {
       order : 0

    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
    return(
        <Fragment>
            <p>Halaman Produk</p>
            <hr/>
            <div className="header">
                <div className="logo">
                    <img src="https://pngimage.net/wp-content/uploads/2018/06/logo-shopee-png-3.png" alt="" />
                </div>
                <div className="count">{this.state.order}</div>
            </div>
            <CardProduk onCounterChange={(value)=> this.handleCounterChange(value)} />
        </Fragment>
        );
    }
}

export default Produk;
