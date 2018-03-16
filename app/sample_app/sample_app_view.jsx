import React from 'react';
import LeftPanelIntro from '../intro/left_panel_intro';


const textStyle = {
  padding: '5px',
  fontSize: '18px',
  textAlign: 'left'
}

class SampleAppView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="game-wrapper">
          <LeftPanelIntro/>
          <div className="gameview">
            <div className="intro-wrapper">
              <div style={textStyle}>
                This application is built on top of Polymer.JS and Redux on top of Nuxeo services backend.<br></br>
                Using the latest web components standards, the application is event driven, declarative, and focused on user experience.
              </div>
              <video src="app/assets/nuxeo_app.mp4" controls></video>
            </div>
          </div>
        </div>
    );
  }
}

export default SampleAppView;
