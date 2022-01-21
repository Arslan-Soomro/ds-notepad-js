import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Store } from './store/Store';
import './index.css';
ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(Store, { children: _jsx(App, {}, void 0) }, void 0) }, void 0), document.getElementById('root'));
