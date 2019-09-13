/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import pullCardsDatafromAPI from './Service';
import Loading from './Loading';
import DetailScreen from './DetailScreen';

import ViewModel from './ViewModel';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class AppScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {data: null};
  }
  static navigationOptions = {
    title: 'HeartStone API',
  };
  updateComponentState = newData => this.setState({data: newData});

  componentDidMount() {
    pullCardsDatafromAPI(this.updateComponentState);
  }
  render() {
    if (this.state.data) {
      return ViewModel(this.state.data, this.props.navigation);
    } else {
      return Loading();
    }
  }
}

//export default App;
const App = createStackNavigator({
  Home: {
    screen: AppScreen,
  },
  DetailScreen: {
    screen: DetailScreen,
  },
});

export default createAppContainer(App);
