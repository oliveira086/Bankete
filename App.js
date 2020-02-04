import React from 'react';
import {Provider} from 'react-redux'
import { StyleSheet} from 'react-native';
import storeConfig from './src/store/storeconfig'
import Telas from './src/rotas'


const store = storeConfig()
const Redux = () => {
  <Provider store={store}>
    
  </Provider>
}

export default class App extends React.Component {
  
  render(){
    return (
        <Telas/>
      
    )
  }
}

