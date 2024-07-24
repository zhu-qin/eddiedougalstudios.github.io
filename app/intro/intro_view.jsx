import React from 'react';
import LeftPanelIntro from './left_panel_intro';

const links = [
  <a key={'github'} className={'link-button intro-link'} href='https://github.com/zhu-qin'>Github</a>,
  <a key={'linkedin'} className={'link-button intro-link'} href='https://www.linkedin.com/in/zhu-qin/'>LinkedIn</a>,
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

class IntroductionView extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="game-wrapper">
          <LeftPanelIntro/>
          <div className="gameview">
            <div className={"intro-wrapper"}>
              <div className={"intro-title"}>Qin Zhu</div>
							<div className={"intro-paragraph"}>

Hi, I'm Qin Zhu. A software engineer based in New York City, USA. The languages I work with include Javascript, HTML, CSS, Ruby, and Java. My experiences include building and deploying user interfaces for enterprise content management software.<br></br>

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

export default IntroductionView;
