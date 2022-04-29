import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from "./src/Routes/index"
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';

export default function App() {
  return (
    <Provider store={store}> 
      <Routes/> 
    </Provider>
  );
}

