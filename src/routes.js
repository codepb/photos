import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import {TransitionGroup } from 'react-transition-group';

import GalleryPage from './pages/galleryPage';
import Home from './pages/home';
import Introduction from './pages/introduction';
import GalleryOverview from './pages/galleryOverview';
import OrderBook from './pages/orderBook';

import Fade from './components/fade';


export const Routes = ({location}) => (
<TransitionGroup>
<Fade key={location.key}>
    <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/introduction" component={Introduction} />
        <Route exact path="/gallery" component={GalleryOverview} />
        <Route exact path="/gallery/:index" component={GalleryPage} />
        <Route exact path="/order" component={OrderBook} />
    </Switch>
</Fade>
</TransitionGroup>);
