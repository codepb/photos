import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import './index.css';
import { routes } from './routes';
import registerServiceWorker from './registerServiceWorker';
import { colors } from './theme';

ReactDOM.render(
    <ThemeProvider theme={{ colors: colors }}>
        <BrowserRouter children={ routes } />
    </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
