import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { AppRegistry } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import PokemonList from './src/screens/PokemonList';
import PokemonDetail from './src/screens/PokemonDetail';


const AppNavigator = createStackNavigator({
  Home: {
    screen: PokemonList,
    navigationOptions: {
      title: 'Pokemon',
    }
  },
  PokemonDetail: {
    screen: PokemonDetail,
    navigationOptions: {
      title: 'Pokemon Detail',
      // headerShow: false
    }
  }
}, {
  initialRouteName: 'Home'
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://192.168.0.7:3000/graphql',
  }),
});

// const MyRootComponent = createAppContainer(AppNavigator)
// const App = () => {
//   <ApolloProvider client={client}>
//     <MyRootComponent></MyRootComponent>
//   </ApolloProvider>
// }

// AppRegistry.registerComponent('MyApp', () => App);
// export default App;
export default createAppContainer(AppNavigator);