import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { push } from 'connected-react-router';
import Home from './home/Home';

export function getRequireAuthComponent(ComposedComponent) {
  class RequireAuth extends PureComponent {
    render() {
      if (!this.props.authenticated) {
        this.props.dispatch(push('/login'));
        return null;
      }
      return <ComposedComponent {...this.props} />;
    }
  }

  return RequireAuth;
}

export const composeHOC = (ComposedComponent) => {
  const unconnectedClass = getRequireAuthComponent(ComposedComponent);

  const mapStateToProps = (state) => ({
    authenticated: state?.userDetails?.authenticated || false,
  });

  return withRouter(connect(mapStateToProps)(unconnectedClass));
};

export const RequireAuth = composeHOC(Home);
