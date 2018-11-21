import React from 'react';
import {Icon} from 'expo';
import { SimpleLineIcons } from '@expo/vector-icons';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <SimpleLineIcons name={this.props.name} size={32} color="green" />
    );
  }
}