const BASE_URL = 'http://localhost:8080/api';

export async function getCharacters() {
  const response = await fetch(`${BASE_URL}/characters`);
  return await response.json();
}

export async function getCharacter(id) {
  // code here
}

export async function createCharacter(character) {
  // code here
  const options = {}
}

export async function updateCharacter(character) {
  // code here
  const options = {
    method: 'PATCH'
  }
}

export async function deleteCharacter(id) {
  // code here
  const options = {}
}
