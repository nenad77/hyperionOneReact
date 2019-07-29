import React, {Component} from 'react';
import {Search} from './components/Search/Search';
import css from './App.css'

class App extends Component {

	render() {
		return(
			<div>
			<div>This is some page</div>
            <Search />
            </div>
		)
	}
}

export default App;