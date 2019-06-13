import { query } from '@/services/api';
import { queryItem } from '@/services/api'

const GamepropsModel = {
  namespace: 'gameprops',

  state: {
    name: ''
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
    
    *fetch({ payload }, { call, put, select }){
      const httpData = yield call(queryItem);
      yield put({
        type: 'save',
        payload: { gameprops: httpData },
      });
    },

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/gameprops') {
          dispatch({
            // type: 'query'
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

export default GamepropsModel;
