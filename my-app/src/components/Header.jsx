export default function Header({ onAdd }) {
  return (
    <header className="bg-gray-500 text-white p-4 m-10 px-4 rounded-md mb-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-semibold">User Management</h1>
        <div>
          <button
            onClick={onAdd}
            className="bg-white text-gray-600 px-4 py-2 rounded-md shadow hover:opacity-90"
          >
            Add User
          </button>
        </div>
      </div>
    </header>
  );
}
