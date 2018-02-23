import React from 'react';
import LeftPanelIntro from '../intro/left_panel_intro';

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
              <video src="app/assets/nuxeo_app.mp4" controls></video>
            </div>
          </div>
        </div>
    );
  }
}

export default SampleAppView;
