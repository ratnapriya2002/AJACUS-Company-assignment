// export default function UserTable({ users, onEdit, onDelete }) {
//   if (!users.length) {
//     return <div className="p-4">No users found.</div>;
//   }

//   return (
//     <div className="overflow-x-auto m-10 bg-white rounded-md shadow">
//       <table className="min-w-full">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="text-left p-3">ID</th>
//             <th className="text-left p-3">First</th>
//             <th className="text-left p-3">Last</th>
//             <th className="text-left p-3">Email</th>
//             <th className="text-left p-3">Department</th>
//             <th className="text-left p-3">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((u) => (
//             <tr key={u.id} className="border-t hover:bg-gray-50">
//               <td className="p-3">{u.id}</td>
//               <td className="p-3">{u.firstName}</td>
//               <td className="p-3">{u.lastName}</td>
//               <td className="p-3">{u.email}</td>
//               <td className="p-3">{u.department}</td>
//               <td className="p-3">
//                 <button
//                   onClick={() => onEdit(u)}
//                   className="mr-2 text-sm px-2 py-2 border rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => onDelete(u)}
//                   className="text-sm px-2 py-2 bg-gray-500 text-white rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import { useState } from "react";

export default function UserTable({ users, onEdit, onDelete }) {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  if (!users.length) {
    return <div className="p-4">No users found.</div>;
  }

  const totalItems = users.length;
  const totalPages = Math.ceil(totalItems / pageSize);

  // Get users for current page
  const currentUsers = users.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="m-10 bg-white rounded-md shadow overflow-x-auto">
        {/* Table */}
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left p-3">ID</th>
              <th className="text-left p-3">First</th>
              <th className="text-left p-3">Last</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Department</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((u) => (
              <tr key={u.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.firstName}</td>
                <td className="p-3">{u.lastName}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.department}</td>
                <td className="p-3">
                  <button
                    onClick={() => onEdit(u)}
                    className="mr-2 text-sm px-2 py-2 border rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(u)}
                    className="text-sm px-2 py-2 bg-gray-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination Controls */}
      <div className="flex items-center justify-end gap-2 m-4">
        <span>Show</span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(1); // reset to first page
          }}
          className="border rounded px-2 py-1"
        >
          {[5, 10, 25, 50, 100].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="border rounded px-3 py-1 disabled:opacity-50"
        >
          Previous
        </button>

        <span>
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="border rounded px-3 py-1 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
