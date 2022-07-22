const BASE_URL = 'http://localhost:8080/api';

export async function getCharacters() {
  const response = await fetch(`${BASE_URL}/characters`);
  return await response.json();
}

export async function getCharacter(id) {
  const response = await fetch(`${BASE_URL}/characters/${id}`);
  return await response.json();
}

export async function createCharacter(character) {
  const response = await fetch(`${BASE_URL}/characters`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });
  return await response.json();
}

export async function updateCharacter(character) {
  const response = await fetch(`${BASE_URL}/characters/${character.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });
  return await response.json();
}

export async function deleteCharacter(id) {
  const response = await fetch(`${BASE_URL}/characters/${id}`, {
    method: 'DELETE',
  });
  return await response.json();
}
