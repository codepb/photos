import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import GalleryContainer from './containers/gallery';
import Home from './pages/home';
import GalleryOverview from './pages/galleryOverview';

export const routes =  <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Gallery" component={GalleryOverview} />
        <Route exact path="/GalleryPage/:index" component={GalleryContainer} />
    </Switch>;
