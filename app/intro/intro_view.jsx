import React from 'react';
import LeftPanelIntro from './left_panel_intro';

const links = [
  <a className={'link-button intro-link'} href='https://github.com/zhu-qin'>Github</a>,
  <a className={'link-button intro-link'} href='https://www.linkedin.com/in/qin-zhu/'>LinkedIn</a>,
]

const nuxeoLink = <a href="https://www.nuxeo.com/">Nuxeo DAM</a>

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

class IntroView extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="game-wrapper">
          <LeftPanelIntro/>
          <div className="gameview">
            <div className={"intro-wrapper"}>
              <div className={"intro-title"}>Hi, I'm Qin Zhu</div>
							<div className={"intro-paragraph"}>
                I am a developer working in digital asset management at {nuxeoLink} <br></br>
              Some technologies I have worked with are Ruby, Rails, JavaScript, Node, React.JS, Polymer.
              I am also an avid gamer and love playing games as well as building them.
              </div>
              <div className="intro-skills-list">
                {skillIcons}
              </div>
              <div className={'intro-links-wrapper'}>
                {links}
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default IntroView;
