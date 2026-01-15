const baseUrl = "http://localhost:3001";

const headers = {
  "Content-Type": "application/json",
};

export const token = (res) => {
  localStorage.setItem("jwt", res.token);
  const authHeaders = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  };
};

const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const getItems = () =>
  fetch(`${baseUrl}/items`, { headers }).then(handleServerResponse);

export const addItem = ({ name, imageUrl, weather }) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(handleServerResponse);
};

export const removeItem = (itemId) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export const signUp = ({ email, password, name, avatar }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(handleServerResponse);
};

export const signIn = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleServerResponse);
};

export const likeItem = (itemId) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/likes/${itemId}`, {
    method: "PUT",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export const unlikeItem = (itemId) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items/likes/${itemId}`, {
    method: "DELETE",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export const getUserInfo = () => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export const updateUserInfo = ({ name, avatar }) => {
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(handleServerResponse);
};
