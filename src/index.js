import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'react-jss';
import 'typeface-roboto';
import 'typeface-raleway';
import './index.css';
import { Routes } from './routes';
import registerServiceWorker from './registerServiceWorker';
import { palette } from './theme';

ReactDOM.render(
    <ThemeProvider theme={{ palette: palette }}>
        <BrowserRouter>
        <Route render={({location}) => (
            <Routes location={location}/>)} />
        </BrowserRouter>
    </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
