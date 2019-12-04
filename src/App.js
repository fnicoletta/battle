import React, { Component } from 'react'
import './index.css'
import Popular from './components/popular.js'
import Battle from './components/battle.js'
import Results from './components/results.js'
import { ThemeProvider } from './contexts/theme.js'
import Nav from './components/nav.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			theme: 'light',
			toggleTheme: () => {
				this.setState(({ theme }) => ({
					theme: theme === 'light' ? 'dark' : 'light'
				}))
			}
		}
	}
  render() {
  return (
  	<Router>
	  	<ThemeProvider value={this.state}>
		  	<div className={this.state.theme}>
			   <div className='container'>
			    	<Nav />
			      <Route exact path='/' component={Popular} />
			      <Route exact path='/battle' component={Battle} />
			      <Route exact path='/battle/results' component={Results} />
			   </div>
		   </div>
	    </ThemeProvider>
    </Router>
  );
}
}

export default App;