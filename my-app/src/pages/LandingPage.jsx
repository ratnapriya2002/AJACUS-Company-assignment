// import { useState } from "react";
// import { doctors } from "../data/doctors";
// import { Link } from "react-router-dom";

// export default function LandingPage() {
//   const [search, setSearch] = useState("");

//   const filteredDoctors = doctors.filter(
//     (doc) =>
//       doc.name.toLowerCase().includes(search.toLowerCase()) ||
//       doc.specialization.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-200  px-13">
//       <h1 className="text-3xl font-bold text-center mb-6">
//         NirogGyan - Find a Doctor
//       </h1>
//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search by name or specialization"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="p-2 w-1/2 border rounded-md"
//         />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredDoctors.map((doc) => (
//           <div key={doc.id} className="bg-white shadow-md rounded-xl p-4">
//             <img
//               src={doc.image}
//               alt={doc.name}
//               className="rounded-full w-24 h-24 mx-auto"
//             />
//             <h2 className="text-xl font-semibold mt-2 text-center">
//               {doc.name}
//             </h2>
//             <p className="text-center text-gray-600">{doc.specialization}</p>
//             <p
//               className={`text-center mt-1 ${
//                 doc.availability === "Available Today"
//                   ? "text-green-600"
//                   : "text-red-500"
//               }`}
//             >
//               {doc.availability}
//             </p>
//             <div className="text-center mt-3">
//               <Link
//                 to={`/doctor/${doc.id}`}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//               >
//                 View Profile
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { doctors } from "../data/doctors";
import { Link } from "react-router-dom";

export default function LandingPage() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter(
    (doc) =>
      doc.name.toLowerCase().includes(search.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen  px-6 md:px-12">
      <h1 className="text-3xl text-sky-600 font-bold text-center m-6">
        NirogGyan - Find a Doctor
      </h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name or specialization"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-1/2 border border-sky-600 rounded-md 
             placeholder:text-sky-600 shadow-sm 
             focus:outline-none focus:ring-2 focus:ring-sky-600 transition"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredDoctors.map((doc, index) => (
          <div
            key={doc.id}
            className="bg-sky-600 shadow-md rounded-xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
            style={{ animation: `fadeIn 0.5s ease ${index * 0.1}s both` }}
          >
            <img
              src={doc.image}
              alt={doc.name}
              className="rounded-full w-24 h-24 mx-auto bg-white  shadow-md"
            />
            <h2 className="text-xl font-semibold text-white mt-2 text-center">
              {doc.name}
            </h2>
            <p className="text-center text-yellow-500">{doc.specialization}</p>
            <p
              className={`text-center mt-1 ${
                doc.availability === "Available Today"
                  ? "text-black"
                  : "text-black"
              }`}
            >
              {doc.availability}
            </p>
            <div className="text-center mt-3">
              <Link
                to={`/doctor/${doc.id}`}
                className="bg-white text-sky-600 px-4 py-2 rounded-lg  transition"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Add fadeIn animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
