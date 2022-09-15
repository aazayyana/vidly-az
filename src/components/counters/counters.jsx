import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const {onReset, onDelete, onIncrement, onDecrement } = this.props;
        return (
            <React.Fragment>
                <div>
                    <button
                        onClick={onReset}
                        className="btn btn-primary btn-sm m-2">
                        Reset
                    </button>
                    {this.props.counters.map(counter =>
                        <Counter
                            key={counter.id}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onDelete={onDelete}
                            counter={counter}
                         />
                    )}
                </div>
            </React.Fragment>
        );
    }
}
 
export default Counters;