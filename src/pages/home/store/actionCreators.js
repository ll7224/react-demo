import axios from 'axios';
import { fromJS } from 'immutable';
import * as constants from './constants'

const changeHomeList = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})

const addHomeList = (list, nextPage) => ({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage
})

export const getHomeInfo =() => {
  return (dispatch) => {
    axios.get('/api/home.json')
    .then((res) => {
        const result = res.data.data
        dispatch(changeHomeList(result))
    })
  }
}

export const getMoreInfo = (page) => {
    return (dispatch) => {
      axios.get('/api/homeList.json?page='+ page)
      .then((res) => {
          const result = res.data.data
          dispatch(addHomeList(result, page+1))
      })
    }
}

export  const changeTopShow = (status) => ({
     type: constants.TOGGLE_SCROLL_SHOW,
     status
})