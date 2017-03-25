import React from 'react'
const ROUTES = {}

class Router extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  init() {
    window.onhashchange = (hash) => {
      this.setState({path: hash.newURL.split("#").pop()})
    }
  }

  componentDidMount() {
    this.init()
    this.props.children.forEach((child) => ROUTES[child.props.path] = child)
    if (!window.location.hash){
      window.location.hash = Object.keys(ROUTES)[0]
    } else {
      let url = window.location.hash.split("#").pop();
      this.setState({ path: url })
    }

  }

  render () {
    return (
      <div>
        {this.state.path ? ROUTES[this.state.path] : undefined}
      </div>
    )
  }

}

export default Router
