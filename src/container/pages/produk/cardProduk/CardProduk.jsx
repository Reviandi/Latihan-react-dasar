import React, {Component} from "react";

class CardProduk extends Component {
    state = {
       order : 0

    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
        this.handleCounterChange(this.state.order);
    })
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
    }
    
    render(){
    return(
            <div className="card">
                <div className="img-thumb">
                    <img src="https://olshop.id/olshop.id/image/cache/img_user/user_21791/20210213191143_IMG-20210211-WA0016-400x300.jpg" alt="Produk" />
                </div>
                <p className="produk-tittle">Pakaian bagus kualitas</p>
                <p className="produk-price">Rp.25000,00</p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}>-</button>
                    <input type="button" value={this.state.order} />
                    <button className="plus" onClick={this.handlePlus}>+</button>
                </div>
            </div>
        );
    }
}

export default CardProduk;
