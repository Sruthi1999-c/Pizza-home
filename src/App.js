
import React from 'react';
import { Outlet } from 'react-router-dom';


import './App.css';
import Header from './Header';
import Body from './Body';
import { LocationProvider } from './locationProvider';

function App() {
  return (

   <div>
     <LocationProvider>
      <Header/> 
      <Outlet> 
      <Body/>
      </Outlet>    
      </LocationProvider>
      
      </div>
  );
}


export default App;
