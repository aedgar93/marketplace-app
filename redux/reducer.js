import { persistCombineReducers } from 'redux-persist'
import authUser from './reducers/authUser'
import common from './reducers/common'
import items from './reducers/items'
import navigator from './reducers/navigator'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native

const config = {
    key: 'primary',
    storage
   }

export default reducer = persistCombineReducers(config, { authUser, common, items, navigator })

