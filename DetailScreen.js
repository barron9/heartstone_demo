import React from 'react';

import DetailViewModel from './DetailViewModel';

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'HeartStone API : Items',
  };
  render() {
    const { navigation } = this.props;
    return DetailViewModel(navigation.getParam('item', 'NO-ID'),navigation.getParam('data', 'NO-DATA'));
  }
}
