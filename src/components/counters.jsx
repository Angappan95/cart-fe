import React, { Component } from 'react';
import Counter from './counter'


class Counters extends Component {
    render() { 
        const {onIncrement, onDecrement, onDelete} = this.props
        return ( 
            <div>
            <button onClick = {this.props.onReset} className='btn btn-outline-warning btn-sm m-2'>Reset</button> <br />
            {this.props.counters.map(counter => 
                <Counter
                    key={counter.id} 
                    counter={counter}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    onDelete={onDelete}>
                </Counter>)}
            </div>
        );
    }

}
 
export default Counters;