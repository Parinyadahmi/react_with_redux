import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

import {devToolsEnhancer} from 'redux-devtools-extension';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState, devToolsEnhancer(
        // options like actionSanitizer, stateSanitizer
    ));
}