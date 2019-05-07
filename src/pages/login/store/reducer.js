import { fromJS } from 'immutable';
import * as constans from './constants';
import { constants } from '.';

const defaultState = fromJS({
    login: false
})
export default (state = defaultState, action) => {
    switch(action.type) {
        case constans.CHANGE_LOGIN:
          return state.set('login', action.value)
         case constants.LOGIN_OUT:
          return state.set('login', action.value)
        default:
          return state;
    }
}