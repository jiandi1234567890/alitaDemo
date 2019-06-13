import { query } from '@/services/api';
import { queryHeroList} from '@/services/api'

const HeroModel = {
  namespace: 'hero',
  state: {
    filterKey:0,
    heros: [],
    freeheros: [],
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
    *fetch ({ payload }, { call, put, select }) {
      const httpData = yield call(queryHeroList);
      
      const data = [
        {
          ename: 105,
          cname: '廉颇',
          title: '正义爆轰',
          new_type: 0,
          hero_type: 3,
          skin_name: '正义爆轰|地狱岩魂',
        },
        {
          ename: 106,
          cname: '小乔',
          title: '恋之微风',
          new_type: 0,
          hero_type: 2,
          skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
        },
      ];

      yield put({
        type: 'save',
        payload: { heros: httpData || data, },
      });

    },

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/hero') {
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

export default HeroModel;
