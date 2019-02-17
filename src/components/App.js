import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
	
	render() {
		return (
			<div>
				<LoadingBar />
				{this.props.loadingBar === true
					? null
					: <Dashboard />}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		loadingBar: state.loadingBar
	}
}

export default connect(mapStateToProps)(App)