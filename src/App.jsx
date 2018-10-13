import * as React from 'react';
import $ from 'jquery';
//import './App.css';
import { TVChartContainer } from './components/TVChartContainer/index';
import Header from './components/Header.jsx'
//import Screener from './components/Screener.jsx'

class App extends React.Component {
	render() {
		return (
			<div className={ 'App' }>
				{/*<header className={ 'App-header' }>*/}
					{/*<h1 className={ 'App-title' }>*/}
						{/*PSC*/}
					{/*</h1>*/}

				{/*</header>*/}
				<Header />
				<TVChartContainer />
			</div>
		);
	}
}

export default App;
