import React, { Component } from 'react'

class NewTweet extends Component {
	state = {
		text: ''
	}
	
	handleChange = (e) => {
		this.setState({
			text: e.target.value
		})
	}
	
	handleSubmit = (e) => {
		e.preventDefault()
		
		const { text } = this.state
		
		// Todo: Add Tweet to store
		
		console.log('New Tweet: ', text);
		
		this.setState({
			text: ''
		})
	}
	
	render() {
		const { text } = this.state
		
		/* Todo: Redirect to / if submitted */
		
		const tweetLeft = 280 - text.length
		return (
			<div>
				<h3 className='center'>Compose New Tweet</h3>
				<form className='new-tweet' onSubmit={this.handleSubmit}>
					<textarea
						placeholder="What's happening?"
						value={this.state.text}
						onChange={this.handleChange}
						className='textarea'
						maxLength={280}
					/>
					{tweetLeft <= 100 && (
						<div className='tweet-length'>
						{tweetLeft}
						</div>
					)}
					<button
						className='btn'
						type='submit'
						disabled={text === ''}>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

export default NewTweet