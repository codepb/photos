import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import 'typeface-roboto';
import 'typeface-raleway';
import './index.css';
import { routes } from './routes';
import registerServiceWorker from './registerServiceWorker';
import { palette } from './theme';

ReactDOM.render(
    <ThemeProvider theme={{ palette: palette }}>
        <BrowserRouter children={ routes } />
    </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
