import React from 'react';
import {SafeAreaView} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './redux/store';
import {Navigator, SearchScreen} from './screens';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <Navigator />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
