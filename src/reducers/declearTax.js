import { handleActions } from 'redux-actions'

export default handleActions({
  'update declear tax list': (state, { payload }) => {
    payload.CompanyTotal = parseInt(payload.CompanyTotal) || 0
    return {
      ...state,
      declearData: payload
    }
  }
}, {
  declearData: {
    CompanyTotal: 0,
    CompanyList: []
  }
})
