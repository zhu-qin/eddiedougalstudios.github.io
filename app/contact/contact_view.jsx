import React from 'react';
import LeftPanelIntro from '../intro/left_panel_intro.jsx';
import IntroView from '../intro/intro_view.jsx';

const formStyle = {
  padding: '20px',
}

const textInput = {
  width: "500px",
  height: "150px",
  textAlign: "left",
  border: "1px solid",
  borderRadius: "2px",
  resize: "none"
}

const emailInput = {
  width: "500px",
  height: "20px",
  display: 'block',
  textAlign: "left",
  border: "1px solid",
  borderRadius: "2px",
}


const contact = (<form style={formStyle} action="https://formspree.io/qqinzhu@gmail.com" method="POST">
                  <div>
                    <div>Message:</div>
                    <textarea style={textInput} name="name"></textarea>
                  </div>

                  <div>
                    <div>Email:</div>
                    <input style={emailInput} type="email" name="_replyto"></input>
                  </div>
                  <div>
                    <input className={"link-button"} type="submit" value="Send"></input>
                  </div>
                </form>)


class ContactView extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div>
          <IntroView embeddedView={contact}></IntroView>
        </div>
    );
  }
}

export default ContactView
