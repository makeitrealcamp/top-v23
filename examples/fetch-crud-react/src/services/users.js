const BASE_URL = 'https://jsonplaceholder.typicode.com/';

export async function createUser(user) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }

    const response = await fetch(`${BASE_URL}users`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getUsers() {
  const response = await fetch(`${BASE_URL}users`);
  return response.json();
}

export async function getUser(id) {
  try {
    const response = await fetch(`${BASE_URL}users/${id}`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getUserBySlug(slug) {
  try {
    const response = await fetch(`${BASE_URL}users/slug/${slug}`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function updateUser(user) {
  try {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }

    const response = await fetch(`${BASE_URL}users/${user.id}`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function deleteUser(id) {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const response = await fetch(`${BASE_URL}users/${id}`, options);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
