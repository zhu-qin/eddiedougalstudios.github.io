// components
import TetrisView from './tetris/tetris_view.jsx'
import SpaceInvadersView from './space_invaders_game/space_invaders_view'
import IntroView from './intro/intro_view.jsx'
import SampleAppView from './sample_app/sample_app_view.jsx'
import ContactView from './contact/contact_view.jsx'

const Views = {
  'Intro': IntroView,
  'SpaceInvaders': SpaceInvadersView,
  'Nuxeo App': SampleAppView,
  'Tetris': TetrisView,
  'Contact': ContactView,
}

export default Views
