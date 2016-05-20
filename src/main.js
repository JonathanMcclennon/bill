import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import apis from './utils/apis';

apis.getBill();

ReactDOM.render(<App/>, document.getElementById('app'));
