import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './stylesheet.css';
import WhiteBoard from './containers/WhiteBoard';

ReactDOM.render(
    <WhiteBoard/>,
    document.getElementById('root')
);