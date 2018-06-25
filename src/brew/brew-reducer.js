import { SET_NAME } from '../types'

const initState = {
 name: "Otto can't sleep"
}

export default (state = initState, action) => {
  switch(action.type) {
    case SET_NAME:
      return {...state, name: action.payload.name }
    default :
      return state
  }
}
