import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route} from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Button from './components/Button.jsx'

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <MuiThemeProvider>
          <Button/>
        </MuiThemeProvider>
      </div>
    )
  }
}

render(
  <App/>, document.getElementById('app'))
