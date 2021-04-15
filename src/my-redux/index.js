import store from './store'
import {addBug} from './actions'

store.dispatch(addBug("Bug1 added"))

console.log(store)