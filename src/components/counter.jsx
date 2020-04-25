import React, { Component } from 'react';
import 'bootstrap/dist/js/bootstrap.js'

class Counter extends Component {

    // States and Styles
    state = { 
        value: this.props.counter.value,
        products: ['Product']
     };

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }

    // React rendering
    render() { 
        return ( 
            <span>{this.renderProducts()}</span>
        );
    }

    // Support functions
    renderProducts() {
        if (this.state.products.length === 0){
            return <p style={{fontSize: 20, color: 'red'}}>Add products!</p>
        }
        return (
        <div>{this.state.products.map(product => 
            <div className="container m-2" key={product}>
                <span className={this.getBadgeClassName()}>{product}</span>: <span className={this.getBadgeClassName()}>{this.format()} </span>
                <button onClick={() => {this.props.onIncrement(this.props.counter)}} style={{fontSize: 10}} className={'btn btn-outline-success m-2'}>+</button>
                <button onClick={() => {this.props.onDecrement(this.props.counter)}} style={{fontSize: 10}} className={'btn btn-outline-warning m-2'}>-</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} style={{fontSize: 10}} className={'btn btn-outline-danger m-2'}>Delete Item </button>
            </div>
            )}
        </div>
        );
    }

    getBadgeClassName() {
        let classname = 'badge m-2 badge-';
        classname += this.state.value === 0 ? 'warning' : 'primary';
        return classname;
    }

    incrementor = () => {
        this.setState({value: this.state.value + 1})
    }

    decrementor = () => {
        this.setState({value: this.state.value - 1})
    }

    format(){
        const {value} = this.props.counter
        return value === 0 ? 'Zero' : value
    }
}
 
export default Counter;