import { useEffect, useState } from "react";
import {
  fetchUsersApi,
  addUserApi,
  updateUserApi,
  deleteUserApi,
} from "../api/users";

export default function useUsers() {
  const [users, setUsers] = useState([]); // normalized
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function load() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUsersApi();
      setUsers(data);
    } catch (err) {
      setError(err?.message || "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function addUser(user) {
    setLoading(true);
    try {
      const created = await addUserApi(user);
      setUsers((p) => [created, ...p]);
      return created;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function editUser(id, user) {
    setLoading(true);
    try {
      const updated = await updateUserApi(id, user);
      setUsers((p) => p.map((u) => (u.id === id ? updated : u)));
      return updated;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function removeUser(id) {
    setLoading(true);
    try {
      await deleteUserApi(id);
      setUsers((p) => p.filter((u) => u.id !== id));
      return true;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return {
    users,
    loading,
    error,
    reload: load,
    addUser,
    editUser,
    removeUser,
  };
}
