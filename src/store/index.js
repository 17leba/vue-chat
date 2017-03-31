import Vue from 'vue'
import Vuex from 'vuex'
// import user from './modules/user'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
	actions,
	getters
})
