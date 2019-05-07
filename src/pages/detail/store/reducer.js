import { fromJS } from 'immutable';
import * as constans from './constants';

const defaultState = fromJS({
    title: '',
    content: ''
})
export default (state = defaultState, action) => {
    switch(action.type) {
        case constans.GET_DETAIL_LISR:
          return state.merge({
              title: action.title,
              content: action.content
          })
        default:
          return state;
    }
}