import React from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'webpack';
import IndecisionApp from './components/IndecisionApp';

const Layout = () => {
    return (
        <div>
            <p>Header</p>
            <p>Footer</p>
        </div>
    );
};

const template = (
    <div></div>
)

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

