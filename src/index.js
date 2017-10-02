import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { colors } from './theme';

ReactDOM.render(<ThemeProvider theme={{ colors: colors }}><App /></ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
