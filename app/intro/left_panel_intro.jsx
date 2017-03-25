import React from 'react';
import Links from '../links.jsx';

class LeftPanelIntro extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="left-panel">
        <div className="left-panel-profile">
          <img src="./app/assets/portfolio_picture.png"></img>
        </div>
        <Links/>
      </div>
    )
  }

}


module.exports = LeftPanelIntro;
