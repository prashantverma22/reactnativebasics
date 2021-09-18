import React, { useEffect } from 'react';
import AppNavigation from './routing/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './store/configStore';
import SplashScreen from 'react-native-splash-screen';

const App = () => {

   useEffect(() => {
      SplashScreen.hide();
   }, [])

   return (
      <Provider store={store}>
         <AppNavigation />
      </Provider>
   )
}

export default App;