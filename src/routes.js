import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import GalleryPage from './pages/galleryPage';
import Home from './pages/home';
import Introduction from './pages/introduction';
import GalleryOverview from './pages/galleryOverview';

export const routes =  <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/introduction" component={Introduction} />
        <Route exact path="/gallery" component={GalleryOverview} />
        <Route exact path="/gallery/:index" component={GalleryPage} />
    </Switch>;
