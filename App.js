import React, {useEffect} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import createSagaMiddleware from 'redux-saga';

// import {Provider as PaperProvider} from 'react-native-paper';
import reducer from './src/store/reducers';
import rootSaga from './src/store/sagas';

import AppNavigation from './src/navigations/NavigationContainer';
import DrawerContainer from './src/navigations/DrawerContainer';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () =>
  createStore(reducer, applyMiddleware(sagaMiddleware));

const store = configureStore();

sagaMiddleware.run(rootSaga);

const App = () => {

  return (
    <Provider store={store}>
      {/* <PaperProvider>  */}
        <AppNavigation />
      {/* </PaperProvider> */}
    </Provider>
  );
};

export default App;
