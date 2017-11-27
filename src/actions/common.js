import { createAction } from 'redux-actions'
import { fetchCurrentInfo, fetchRangInfo } from '@/utils/api'
// 获取当前角色信息
export const fetchCurrentInfoAction = (cb) => (dispatch) => {
  fetchCurrentInfo().then(res => {
    if (res.status) {
      console.log(res)
      dispatch(createAction('fetch current info')({currentInfo: res.data}))
    }
  }, err => {
    if (cb) {
      cb(err)
    }
  })
}

export const fetchRangInfoAction = (payload) => (dispatch) => {
  fetchRangInfo().then(res => {
    if (res.status) {
      console.log(res)
      dispatch(createAction('fetch rang info')({rangInfo: res.data}))
    }
  })
}
