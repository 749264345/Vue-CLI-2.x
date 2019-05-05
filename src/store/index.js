import state from './state';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

// Vue.use(Vuex)
const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
export default store;