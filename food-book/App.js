
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route } from 'react-router-native';

import login from './components/login.js';
import logout from './components/logout.js';

function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={login} />
      <Route exact path="/logout" component = {logout} />

      <StatusBar style="auto" />
    </NativeRouter>
  );
}

export default App;
