import React from 'react';
import LeftPanelIntro from './left_panel_intro';

class IntroView extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="game-wrapper">
          <LeftPanelIntro/>
          <div className="gameview">
            <div className="intro-wrapper">

            </div>
          </div>
        </div>
    );
  }
}

export default IntroView;
