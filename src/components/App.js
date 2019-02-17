import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'

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
					: <TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}} />}
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