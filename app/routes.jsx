import React from 'react';
import {Route, IndexRoute} from 'react-router';


import TutorialApp from 'TutorialApp';
import SideNav from 'SideNav';

export default (
    <Route path="/" component={TutorialApp}>
        <IndexRoute component={SideNav}/>
    </Route>
);