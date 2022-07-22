const BASE_URL = 'http://localhost:8080/api';

export async function getEpisodes() {
  const response = await fetch(`${BASE_URL}/episodes`);
  return await response.json();
}

export async function getEpisode(id) {

}

export async function createEpisode(episode) {

}

export async function updateEpisode(episode) {

}

export async function deleteEpisode(id) {

}
