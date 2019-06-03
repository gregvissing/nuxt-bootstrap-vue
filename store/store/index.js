import Vuex from 'vuex';
import apiModule from '~/store/store/modules/api-logic';
import appModule from '~/store/store/modules/app-logic';

const createStore = () => {
    return new Vuex.Store({
        namespaced: true,
        modules: {
            appLogic: appModule,
            api: apiModule,
        }
    });
};

export default createStore
