import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

// helper: normalize API user -> our shape
function normalizeUser(u) {
  const name = u.name || "";
  const [first = "", ...rest] = name.split(" ");
  return {
    id: u.id,
    firstName: first,
    lastName: rest.join(" "),
    email: u.email || "",
    department: (u.company && u.company.name) || u.department || "",
    _raw: u,
  };
}

export async function fetchUsersApi() {
  const res = await api.get("/users");
  return res.data.map(normalizeUser);
}

export async function addUserApi(user) {
  const payload = {
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    company: { name: user.department },
  };
  const res = await api.post("/users", payload);
  // API returns the created object with an id (simulated)
  const created = { ...payload, id: res.data.id || Date.now() };
  return normalizeUser(created);
}

export async function updateUserApi(id, user) {
  const payload = {
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    company: { name: user.department },
  };
  await api.put(`/users/${id}`, payload);
  return normalizeUser({ ...payload, id });
}

export async function deleteUserApi(id) {
  await api.delete(`/users/${id}`);
  return { id };
}
