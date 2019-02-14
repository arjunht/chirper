const logger = (store) => (next) => (action) => {
	console.group(action.type)
		console.log('The action: ', action)
		const returnValue = next(action) // this will actually call dispatch() and the state will get updated
		console.log('The new state: ', store.getState())
	console.groupEnd()
	
	return returnValue
}

export default logger