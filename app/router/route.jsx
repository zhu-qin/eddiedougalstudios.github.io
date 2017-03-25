import React from 'react'

class Route extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.setState({view: React.createElement(this.props.component)})
  }

  componentWillUnmount() {
    this.setState({view: undefined})
  }

  render() {
    return (
      <div>
        {this.state.view ? this.state.view : undefined}
      </div>
    )
  }

}

export default Route
