import { State } from './interface';
import { Commit } from 'vuex';

interface GetTodayWeatherParam {
    city: string;
}

const state: State = {
    count: 0,
    test1: [],
};

const getters = {
    count: (s: State) => s.count,
    message: (s: State) => s.test1,
};

const mutations = {
    INCREMENT(s: State, num: number) {
        s.count += num;
    },
};

const actions = {
    async getTodayWeather(context: { commit: Commit }, params: GetTodayWeatherParam) {
        return '';
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
