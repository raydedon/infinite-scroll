import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import configureStore, {history} from './store/configureStore.dev';
import {Route, Switch} from 'react-router-dom';
import Login from './components/login/Login';
import {RequireAuth} from './components/RequireAuth';

const store = configureStore();

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route component={RequireAuth} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    )
};

export {App};
export default App;
