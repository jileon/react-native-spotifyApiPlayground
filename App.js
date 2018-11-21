import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Dashboard from './src/screens/dashboard';
import store from './src/store';
import TabNavigator from './src/navigation/navigationRouter'




export default class App extends React.Component {

	render() {

		return (
      <Provider store={store}>
				{/* <Dashboard/> */}
				<TabNavigator/>
      </Provider>
		);
	}
}
