
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Store';

import './App.css';
import Header from './Header';
import Body from './Body';
import { LocationProvider } from './locationProvider';

function App() {
  return (

   <div>
    <Provider  store = {Store}>
     <LocationProvider>
      <Header/> 
      <Outlet> 
      <Body/>
      </Outlet>    
      </LocationProvider>
      </Provider>
      
      </div>
  );
}


export default App;
