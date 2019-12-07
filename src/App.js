import React, { Component, lazy, Suspense } from 'react'
import './index.css'
import { ThemeProvider } from './contexts/theme.js'
import Nav from './components/nav.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loading from './components/loading.js'

const Popular = lazy(() => import('./components/popular.js'))
const Battle = lazy(() => import('./components/battle.js'))
const Results = lazy(() => import('./components/results.js'))


class App extends Component {
	state = {
			theme: 'light',
			toggleTheme: () => {
				this.setState(({ theme }) => ({
					theme: theme === 'light' ? 'dark' : 'light'
				}))
			}
		}

  render() {
  return (
  	<Router>
	  	<ThemeProvider value={this.state}>
		  	<div className={this.state.theme}>
			   <div className='container'>
			    <Nav />

			    <Suspense fallback={<Loading />}>
			    <Switch>
			      <Route exact path='/' component={Popular} />
			      <Route exact path='/battle' component={Battle} />
			      <Route exact path='/battle/results' component={Results} />
			      <Route render={() => <h1>404</h1>} />
			    </Switch>
			    </Suspense>
			   </div>
		   </div>
	    </ThemeProvider>
    </Router>
  );
}
}

export default App;