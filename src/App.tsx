import React from 'react';
import AppNavigator from './navigation/AppNavigatior.tsx';
import {Provider} from 'react-redux';
import store from './store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
