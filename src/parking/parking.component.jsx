import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import memoize from 'memoize-one';

import { placeShape } from './parking.constants';
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
  getLinks = memoize(data => ([
    { url: '/places', label: 'Places', badge: data.filter(d => !d.occupied).length },
    { url: '/manage', label: 'Manage', badge: data.length },
  ]));

  render() {
    const links = this.getLinks(this.props.data);
    return (
      <Grid>
        <Row>
          <TopMenu links={links} />
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

Parking.propTypes = {
  data: PropTypes.arrayOf(placeShape).isRequired,
};

const mapStateToProps = state => ({
  data: state.parking.places,
});

export default withRouter(connect(mapStateToProps)(Parking));

