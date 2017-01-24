/**************************************************************************
  Central functional component to tweak different scenes/routes
  to which a user can navigate
***************************************************************************/

import React from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

import FindPubs from './components/FindPubs'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }} >
      <Scene key="main">
        <Scene initial key="findPubs" component={FindPubs} title="Barley Crawl"/>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
