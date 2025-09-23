import { useMemo, useState } from "react";
import useUsers from "./components/hooks/useUsers";
import Header from "./components/Header";
import SearchSortBar from "./components/SearchSortBar";
import FilterModal from "./components/FilterModal";
import UserTable from "./components/UserTable";
import UserFormModal from "./components/UserFormModal";
import { Toast } from "./components/Toast";

export default function App() {
  const {
    users: rawUsers,
    loading,
    error,
    reload,
    addUser,
    editUser,
    removeUser,
  } = useUsers();

  // UI states
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ field: "id", dir: "asc" });
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const [filterOpen, setFilterOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [toast, setToast] = useState(null);

  // rows-per-page
  const [pageSize, setPageSize] = useState(10);

  // derived filtered + searched + sorted users
  const processed = useMemo(() => {
    let arr = [...rawUsers];

    // filters
    arr = arr.filter((u) => {
      const fFirst = filters.firstName.trim().toLowerCase();
      const fLast = filters.lastName.trim().toLowerCase();
      const fEmail = filters.email.trim().toLowerCase();
      const fDept = filters.department.trim().toLowerCase();
      if (fFirst && !u.firstName.toLowerCase().includes(fFirst)) return false;
      if (fLast && !u.lastName.toLowerCase().includes(fLast)) return false;
      if (fEmail && !u.email.toLowerCase().includes(fEmail)) return false;
      if (fDept && !u.department.toLowerCase().includes(fDept)) return false;
      return true;
    });

    // search across fields
    const q = search.trim().toLowerCase();
    if (q) {
      arr = arr.filter((u) =>
        `${u.firstName} ${u.lastName} ${u.email} ${u.department}`
          .toLowerCase()
          .includes(q)
      );
    }

    // sort
    arr.sort((a, b) => {
      const A = (a[sort.field] || "").toString().toLowerCase();
      const B = (b[sort.field] || "").toString().toLowerCase();
      if (A < B) return sort.dir === "asc" ? -1 : 1;
      if (A > B) return sort.dir === "asc" ? 1 : -1;
      return 0;
    });

    return arr;
  }, [rawUsers, filters, search, sort]);

  // only show top `pageSize` rows
  const visible = useMemo(() => {
    return processed.slice(0, pageSize);
  }, [processed, pageSize]);

  // actions
  async function handleAdd(user) {
    try {
      await addUser(user);
      setToast({ message: "User added", type: "success" });
    } catch (err) {
      setToast({ message: err?.message || "Add failed", type: "error" });
    }
  }

  async function handleEdit(user) {
    try {
      await editUser(editing.id, user);
      setToast({ message: "User updated", type: "success" });
    } catch (err) {
      setToast({ message: err?.message || "Update failed", type: "error" });
    }
  }

  async function handleDelete(user) {
    if (!confirm(`Delete user ${user.firstName} ${user.lastName}?`)) return;
    try {
      await removeUser(user.id);
      setToast({ message: "User deleted", type: "success" });
    } catch (err) {
      setToast({ message: err?.message || "Delete failed", type: "error" });
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <Header
          onAdd={() => {
            setEditing(null);
            setFormOpen(true);
          }}
        />

        <SearchSortBar
          onSearch={(s) => {
            setSearch(s);
          }}
          onOpenFilter={() => setFilterOpen(true)}
          onSortChange={(s) => setSort(s)}
        />

        <UserTable
          users={visible}
          onEdit={(u) => {
            setEditing(u);
            setFormOpen(true);
          }}
          onDelete={handleDelete}
        />

        <FilterModal
          visible={filterOpen}
          onClose={() => setFilterOpen(false)}
          filters={filters}
          setFilters={setFilters}
        />

        <UserFormModal
          visible={formOpen}
          onClose={() => setFormOpen(false)}
          initial={editing}
          onSave={async (data) => {
            if (editing) await handleEdit(data);
            else await handleAdd(data);
            setFormOpen(false);
          }}
        />

        <Toast
          message={toast?.message}
          type={toast?.type}
          onClose={() => setToast(null)}
        />
      </div>
    </div>
  );
}
