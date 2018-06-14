import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Grid, Row } from 'react-bootstrap';

import Loading from './components/loading/loading.component';
import TopMenu from './top-menu/top-menu.component';
import Dashboard from './dashboard/dashboard.component';

const Places = Loadable({
  loader: () => import(/* webpackChunkName: 'places' */ './places/places.component'),
  loading: Loading,
});
const ManagePlaces = Loadable({
  loader: () => import(/* webpackChunkName: 'manage-places' */ './manage-places/manage-places.component'),
  loading: Loading,
});

class Parking extends React.Component {
  constructor(props) {
    super(props);

    this.links = [
      { url: '/places', label: 'Places' },
      { url: '/manage', label: 'Manage' },
    ];
  }

  render() {
    return (
      <Grid>
        <Row>
          <TopMenu links={this.links} />
        </Row>
        <Row>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/places" component={Places} />
            <Route path="/manage" component={ManagePlaces} />
          </Switch>
        </Row>
      </Grid>
    );
  }
}

export default Parking;
