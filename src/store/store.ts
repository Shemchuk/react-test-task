import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxThunk from 'redux-thunk';

import reducer from './reducers';

const store: Store = createStore(reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
