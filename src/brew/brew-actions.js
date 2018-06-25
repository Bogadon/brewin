import { SET_NAME } from '../types'

export const setName = (name) => {
  console.log("rat eater")
  return dispatch => {
    dispatch({
       type: SET_NAME,
       payload: {
        name: (name || 'Otto')
       }
    })
  }
}
