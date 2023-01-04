import React from 'react'
import ReactDOM from 'react-dom'
import Route from './router/route.jsx'
import Router from './router/router.jsx'
import Views from './views.js'

const routes = Object.keys(Views).map((view) => {
  return (
    <Route path={`Portfolio/${view}`}
           component={Views[view]}
           key={view}>
    </Route>
  )
})

const App = (
  <Router>
    {routes}
  </Router>
)

document.addEventListener("DOMContentLoaded", (e) => {
  let root = document.getElementById('root')
  ReactDOM.render(App, root)
})

// test push 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
