// components
import TetrisView from './tetris/tetris_view.jsx'
import SpaceInvadersView from './space_invaders_game/space_invaders_view'
import IntroView from './intro/intro_view.jsx'

const Views = {
  'Intro': IntroView,
  'Space Invaders': SpaceInvadersView,
  'Tetris': TetrisView,
  'Contact': IntroView,
}

export default Views
