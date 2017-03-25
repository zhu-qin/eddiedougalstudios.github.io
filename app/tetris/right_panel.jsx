import React from 'react';

import ControlButton from './control_button';

class RightPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  changeGameSpeed(e) {
    let game = this.props.game;
    game.speed = Math.abs(1000 - e.target.value);
    if (game.running) {
      game.stopGame();
      game.startGame();
    }
    this.forceUpdate();
  }

  toggleGame(e){
    if (this.props.game.running) {
      this.props.game.stopGame();
    } else {
      this.props.game.startGame();
    }
    this.forceUpdate();
  }

  render() {
    let game = this.props.game;
    let toggleGameButton = game.running ? "PAUSE" : "START"

    return (
      <div className="right-panel">
        <div className="instructions">
          A - move left <br></br>
          D - move right <br></br>
          S - move down <br></br>
          Q - rotate counter-clockwise <br></br>
          E - rotate clockwise <br></br>
        </div>

        <div className="game-buttons-wrapper">
          <label>Speed: {1000 - game.speed}
            <input className="slide-bar"
                   onChange={this.changeGameSpeed.bind(this)}
                   value={1000 - game.speed}
                   type="range"
                   min="1"
                   max="1000">
            </input>
          </label>
          <div className={`game-buttons ${toggleGameButton}`} onClick={this.toggleGame.bind(this)}>
            {toggleGameButton}
          </div>
          <div className="game-buttons" onClick={this.props.makeNewGame}>
            RESET
          </div>
        </div>


      </div>
    );
  }
}

module.exports = RightPanel;
