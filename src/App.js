import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import IceCreameContainer from './components/IceCreameContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ItemContainer cake/>
      <ItemContainer/>
     <CakeContainer/>
     <HookCakeContainer/>
     <IceCreameContainer/>
     <NewCakeContainer/>
    </div>
    </Provider>
  )
}

export default App;
