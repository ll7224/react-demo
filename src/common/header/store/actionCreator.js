import * as constants from './constants'
import axios from 'axios';
import { fromJS } from 'immutable'

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const searchFoucs = () => ({
    type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
})

export const changeMouse = () => ({
    type: constants.CHANGE_MOUSE
})
export const MouseLeave = () => ({
    type: constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

export const getList = () => {
    return (dispatch) => {
       axios.get('/api/headerList.json')
       .then((res) => {
          const data = res.data.data
          dispatch(changeList(data))
       })
       .catch((err) => {

       })
    }
}