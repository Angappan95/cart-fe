import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Counters from './components/counters'
import NavBar from './components/navBar'


class App extends Component {
  state = { 
        counters: 
        [
            {id: 1, value: 0, title: 'Category 1', newProp: 'This is new prop'},
            {id: 2, value: 0, title: 'Category 2'},
            {id: 3, value: 0, title: 'Category 3'}
        ]
     }
    
  incrementor = counter => {
      const counters_upd = [...this.state.counters]
      let index = counters_upd.indexOf(counter)
      counters_upd[index] = {...counter}

      counters_upd[index].value += 1 //incremeting the value
      this.setState({counters: counters_upd})
  }

  decrementor = counter => {
      const counters_upd = [...this.state.counters]
      let index = counters_upd.indexOf(counter)
      counters_upd[index] = {...counter}

      counters_upd[index].value -= 1 //decrementing the value
      console.log(counters_upd)
      this.setState({counters: counters_upd})
  }

  deleteItem = (ObjectId) =>{
    // this.setState( {value : this.state.value - 1})
    const counters_upd = this.state.counters.filter(c => c.id !== ObjectId)
    this.setState({counters: counters_upd})
}

resetHandle = () => {
    const counters_upd = this.state.counters.map( counter => {
        counter.value = 0
        return counter
    }
    )
    this.setState({counters: counters_upd})
}

getTotalCount = () => {
  let total = 0
  this.state.counters.map(counter => {
      total += counter.value
      return total
  })
  return total
}

  render() { 
    return ( 
      <div className="container">
        <NavBar 
          counters={this.state.counters}
          onGetCount={this.getTotalCount}
        />
        <main className='container'>
            <Counters
              counters={this.state.counters}
              onIncrement={this.incrementor}
              onDecrement={this.decrementor}
              onDelete={this.deleteItem}
              onReset={this.resetHandle}
              onGetCount={this.getTotalCount}
            />
        </main>  
      </div> 
    );
  }
}
 
export default App;
