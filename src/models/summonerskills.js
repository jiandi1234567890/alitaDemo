import { query } from '@/services/api';
import { querySummonerSkills } from '@/services/api'

const SummonerskillsModel = {
  namespace: 'summonerskills',

  state: {
    filterKey:0,
    summonerskill: [],
    select: 80104,
  },

  effects: {
    *query({ payload }, { call, put, select }) {
      const data = yield call(query, payload);
      console.log(data)
      yield put({
        type: 'save',
        payload: { name: data.text },
      });

    },
    *fetch({ payload }, { call, put, select }) {
      const httpData = yield call( querySummonerSkills);
      yield put({
        type: 'save',
        payload: {summonerskill: httpData},
      });
    }

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/summonerskills') {
          dispatch({
            type: 'fetch'
          })
        }
      });
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default SummonerskillsModel;
