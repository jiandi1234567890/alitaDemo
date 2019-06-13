import { request } from 'alita';

export async function query() {
  return request('/api/hello');
}

export async function queryHeroList() {
  return request('/api/herolist.json');
}

export async function queryFreeHeros(params) {
  return request('/api/freeheros.json', {
    method: 'POST',
    body: JSON.stringify(params),
  });
}

export async function queryItem() {
  return request('/api/item.json');
}

export async function querySummonerSkills() {
  return request('/api/summoner.json');
}

