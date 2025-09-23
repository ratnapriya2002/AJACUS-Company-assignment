export default function FilterModal({ visible, onClose, filters, setFilters }) {
  if (!visible) return null;
  function update(k, v) {
    setFilters((prev) => ({ ...prev, [k]: v }));
  }
  return (
    <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-md w-full max-w-md shadow-lg">
        <h3 className="text-lg font-semibold mb-3">Filters</h3>
        <div className="space-y-2">
          <input
            value={filters.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            placeholder="First name"
            className="w-full border rounded px-2 py-1"
          />
          <input
            value={filters.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            placeholder="Last name"
            className="w-full border rounded px-2 py-1"
          />
          <input
            value={filters.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="Email"
            className="w-full border rounded px-2 py-1"
          />
          <input
            value={filters.department}
            onChange={(e) => update("department", e.target.value)}
            placeholder="Department"
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button
            onClick={() => {
              setFilters({
                firstName: "",
                lastName: "",
                email: "",
                department: "",
              });
              onClose();
            }}
            className="px-3 py-1 border rounded"
          >
            Clear
          </button>
          <button
            onClick={onClose}
            className="px-3 py-1 bg-gray-600 text-white rounded"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
