
import { Navigator } from '../../components/Navigator'
import { NavigationActions } from 'react-navigation'

const initialAction = { type: NavigationActions.Init }
const initialState = Navigator.router.getStateForAction(initialAction)

export default (state = initialState, action) => {
  return { ...state }
}
