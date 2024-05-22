import React from 'react';
import { connect } from 'react-redux';
const CounterComponent = (props) => {
    // Вывод значения
    return (
        <div>
            <h1>Counter</h1>
            <h2>{props.count}</h2>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
};

export default connect(mapStateToProps)(CounterComponent);