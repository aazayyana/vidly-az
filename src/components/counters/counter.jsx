import React, { Component } from 'react';

class Counter extends Component {
    render() { 
        const { onIncrement, onDecrement, onDelete, counter } = this.props;
        return (
            <div className='row'>
                <div className="col-1">
                    <span className={this.getBadgesClasses()}>
                        {this.formatCount()}
                               </span>
                </div>
                
                <div className="col">
                <button
                    onClick={() => onIncrement(counter)}
                    className="btn btn-primary btn-sm">
                    +</button>

                    <button
                        onClick={() => onDecrement(counter)}
                        className="btn btn-primary btn-sm m-2"
                        disabled={counter.value===0? "disabled": ""}
                    >
                    -</button>

                    <button
                        onClick={() => onDelete(counter.id)}
                        className="btn btn-danger btn-sm">
                    x</button>
                </div>

                

            </div>
        );
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'zero' : count;
    }

    getBadgesClasses() {
        let classes = 'badge m-2 bg-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }
}
 
export default Counter;