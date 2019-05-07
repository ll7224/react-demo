import axios from 'axios'
import * as constants from './constants'

const detailist = (title, content) => ({
    type: constants.GET_DETAIL_LISR,
    title: title,
    content: content
})
export const getDetail = (id) => {
    return (dispatch) => {
       axios.get('/api/detail.json?id=' + id)
       .then((res) => {
          const detailList = res.data.data
          dispatch(detailist(detailList.title, detailList.content))
       })
       .catch((err) => {
            alert('请求失败,重新刷新')
       })
    }
}