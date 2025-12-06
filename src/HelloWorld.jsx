import React, { Component } from 'react';
import Counter from './Counter';

class HelloWorld extends Component {
    render() {
        return (
            <div>
            <h1>Hello,{this.props.name}</h1>
            <Counter />
            </div>
        );
    }
}

export default HelloWorld;