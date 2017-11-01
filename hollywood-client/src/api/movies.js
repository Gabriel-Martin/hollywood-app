const createURL = (path = "") => `http://localhost:4040/api/movies/${path}`;

export const getById = id => {
  return fetch(createURL(id))
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const getAll = () => {
  return fetch(createURL())
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const create = data => {
  return fetch(createURL(), {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const update = (id, data) => {
  return fetch(createURL(id), {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export const remove = id => {
  return fetch(createURL(id), {
    method: "DELETE"
  })
    .then(response => response.json())
    .catch(err => console.log(err));
};
