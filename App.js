import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Dashboard from './src/components/dashboard';
import store from './src/store';





export default class App extends React.Component {

	render() {

		return (
      <Provider store={store}>
        <Dashboard/>
      </Provider>
		);
	}
}
