import { useState, useEffect } from "react";
import { required, isEmail } from "./utils/validators";

export default function UserFormModal({
  visible,
  onClose,
  initial = null,
  onSave,
}) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initial)
      setForm({
        firstName: initial.firstName || "",
        lastName: initial.lastName || "",
        email: initial.email || "",
        department: initial.department || "",
      });
    else setForm({ firstName: "", lastName: "", email: "", department: "" });
    setErrors({});
  }, [initial, visible]);

  if (!visible) return null;

  function change(k, v) {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: null }));
  }

  function validate() {
    const e = {};
    if (!required(form.firstName)) e.firstName = "Required";
    if (!required(form.lastName)) e.lastName = "Required";
    if (!required(form.email)) e.email = "Required";
    else if (!isEmail(form.email)) e.email = "Invalid email";
    return e;
  }

  async function submit() {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    await onSave(form);
    onClose();
  }

  return (
    <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-md w-full max-w-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-3">
          {initial ? "Edit User" : "Add User"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <label className="text-sm">First name</label>
            <input
              value={form.firstName}
              onChange={(e) => change("firstName", e.target.value)}
              className="w-full border rounded px-2 py-1"
            />
            {errors.firstName && (
              <div className="text-red-500 text-sm">{errors.firstName}</div>
            )}
          </div>
          <div>
            <label className="text-sm">Last name</label>
            <input
              value={form.lastName}
              onChange={(e) => change("lastName", e.target.value)}
              className="w-full border rounded px-2 py-1"
            />
            {errors.lastName && (
              <div className="text-red-500 text-sm">{errors.lastName}</div>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Email</label>
            <input
              value={form.email}
              onChange={(e) => change("email", e.target.value)}
              className="w-full border rounded px-2 py-1"
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Department</label>
            <input
              value={form.department}
              onChange={(e) => change("department", e.target.value)}
              className="w-full border rounded px-2 py-1"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-3 py-1 border rounded">
            Cancel
          </button>
          <button
            onClick={submit}
            className="px-3 py-1 bg-gray-600 text-white rounded"
          >
            {initial ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
