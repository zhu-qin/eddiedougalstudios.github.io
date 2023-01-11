import React from 'react';
import LeftPanelIntro from './left_panel_intro';

const links = [
  <a key={'github'} className={'link-button intro-link'} href='https://github.com/zhu-qin'>Github</a>,
  <a key={'linkedin'} className={'link-button intro-link'} href='https://www.linkedin.com/in/qin-zhu/'>LinkedIn</a>,
]

const skillIcons = [
  "ruby.png",
  "rails.png",
  "javascript.png",
  "react.png",
  "html.png",
  "css.png",
  "jquery.png",
  "postgresql.png",
  "git.png",
  "aws.png"
].map((src) => {
  return (
    <div className={"intro-skills-list-icon"} key={src}>
      <img src={`app/assets/skills_icons/${src}`}></img>
    </div>
  )
})

class EddieView extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="game-wrapper">
          <LeftPanelIntro/>
          <div className="gameview">
            <div className={"intro-wrapper"}>
              <div className={"intro-title"}>Eddie Dougal</div>
							<div className={"intro-paragraph"}>
Eddie Dougal - Film Producer, Engineer.<br></br>
Office Scene - Four cubic bulbs diagonal to each corner of a four walled room. Good morning to the office.<br></br>
Actor one: "The meeting is cancelled, keep working". Exit - imply coffee break at coffee shop.<br></br>
Actor two: "Good idea". Fingers on keyboard, check emails, prepare to watch movies. Not enough time to complete all tasks. Reconsider and exit quickly.
Exit - suspicious activity at home.<br></br>
Actor three: "Godd idea". Exit - also suspicious activity at home.<br></br>
              </div>
              <div className="intro-skills-list">
                {skillIcons}
              </div>
              <div className={'intro-links-wrapper'}>
                { this.props.embeddedView ? this.props.embeddedView : links }
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default EddieView;
