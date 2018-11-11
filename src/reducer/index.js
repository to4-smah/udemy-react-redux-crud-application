import { combinrReducers } from 'redux'
import count from './count'

export default combinrReducers({ count })
// export default combinrReducers({ foo, bar, baz })