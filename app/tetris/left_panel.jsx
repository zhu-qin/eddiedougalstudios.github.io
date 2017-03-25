import React from 'react';

import ControlButton from './control_button';
import Links from '../links.jsx';

class LeftPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  makeGrid() {
    return Array(4).fill().map((el) => {
      return Array(4).fill({});
    });
  }

  render() {
    let game = this.props.game;
    let sideDisplayNext;
    let score = (
      <div className={'left-panel-score'}>
          High Score: {localStorage.tetrisHighScore} <br></br>
          Current Score: {game.score}
      </div>
    )


    if (!game.gameLost){
      let grid = this.makeGrid();
      game.nextPiece.coords.forEach((coord) => {
        grid[coord[0] + 1][coord[1] - 5] = game.nextPiece.fillColor;
      });

      let rows = grid.map((row, rowIdx) => {
        let units = row.map((unit, unitIdx) => {

          return (
            <div key={unitIdx} className={`display-block ${unit}`}>
            </div>
          );
        });

        return (
          <div key={rowIdx} className="row">
            {units}
          </div>
        );
      });

      sideDisplayNext = <div className="nextpiece-display">
                          Next Piece:
                          <div className="nextpiece-display-block">
                            {rows}
                          </div>
                        </div>;
    } else {
      sideDisplayNext = <div className="nextpiece-display">
                          <div className="nextpiece-display-gameover">
                            GAME OVER
                          </div>
                        </div>;
    }

    return (
      <div className="left-panel">
        <div className="left-panel-profile">
          {score}
          {sideDisplayNext}
        </div>
        <Links/>
      </div>
    );
  }
}


module.exports = LeftPanel;
