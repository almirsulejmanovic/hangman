import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WebFont from 'webfontloader'
import { GlobalProvider } from '../context/GlobalState'
import SiteHeader from './SiteHeader'
import About from './About'
import NotFound from './NotFound'
import Game from './Game'
import KB from './Keyboard'
import '../assets/css/app.css'

WebFont.load({
  google: {
    families: ['Lato:300', 'sans-serif']
  }
})

const App = () => {
  return (
    <GlobalProvider>
      <Router basename={process.env.PUBLIC_URL}>
        <SiteHeader />
        <main className="site-content">
          <Switch>
            <Route exact path="/" component={Game} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </Router>
      <KB />
    </GlobalProvider>
  )
}

export default App;
