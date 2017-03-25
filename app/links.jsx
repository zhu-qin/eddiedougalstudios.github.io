import React from 'react'
import Views from './views'

class Links extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let views = Object.keys(Views).map((view) => {
      return (
        <a className={`link-button link-button-${view.split(" ").join("")}`}
           href={`#Portfolio/${view}`}
           key={view}> {view}
        </a>
      )
    })

    return (
      <div>
        {views}
      </div>
    )
  }
}

export default Links
