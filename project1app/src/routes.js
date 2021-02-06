import React from 'react';
import {Route} from 'react-router-dom'
import HomePageView from './containers/HomePageView'
import Project1PageView from './containers/Project1PageView'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={HomePageView}/>
        <Route exact path='/project1' component={Project1PageView}/>
    </div>
);

export default BaseRouter;