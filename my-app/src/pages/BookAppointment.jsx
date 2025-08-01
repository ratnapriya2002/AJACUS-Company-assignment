// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { doctors } from "../data/doctors";
// import emailjs from "emailjs-com";

// export default function BookAppointment() {
//   const { id } = useParams();
//   const doctor = doctors.find((d) => d.id === parseInt(id));

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     date: "",
//     time: "",
//   });
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.date || !formData.time) {
//       alert("Please fill all fields");
//       return;
//     }

//     // Send email using EmailJS
//     const templateParams = {
//       user_name: formData.name,
//       user_email: formData.email,
//       user_subject: `Appointment with ${doctor.name}`,
//       message: `Date: ${formData.date}, Time: ${formData.time}`,
//     };

//     emailjs
//       .send(
//         "service_e446e6o",
//         "template_0d4u80d",
//         templateParams,
//         "Jy3Usgojvq5XoWDoI" // replace with EmailJS public key
//       )
//       .then(
//         () => {
//           console.log("Email sent successfully!");
//           setSuccess(true);
//         },
//         (error) => {
//           console.error("Failed to send email:", error);
//           alert("There was an error sending the confirmation email.");
//         }
//       );
//   };

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
//       style={{
//         backgroundImage:
//           "url('https://media.gettyimages.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=StV1gAkbzgp14Us0XAfuIRoWo8iXO7CUwUOlh66Y9S0=')",
//       }}
//     >
//       {success ? (
//         // ✅ Success Message Card
//         <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-10 text-center animate-fadeIn">
//           <h1 className="text-3xl font-bold text-green-700 mb-3">
//             Appointment Confirmed!
//           </h1>
//           <p className="text-lg text-gray-800">
//             {formData.name}, a confirmation email has been sent to{" "}
//             <span className="font-semibold text-green-600">
//               {formData.email}
//             </span>
//           </p>
//         </div>
//       ) : (
//         // ✅ Booking Form Card
//         <div className="max-w-md w-full bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-6 animate-fadeIn">
//           <h1 className="text-2xl font-semibold text-center mb-4">
//             Book Appointment with{" "}
//             <span className="text-sky-600">{doctor.name}</span>
//           </h1>
//           <form onSubmit={handleSubmit} className="space-y-3">
//             <input
//               className="w-full p-2 border border-sky-600 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
//               placeholder="Name"
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//             />
//             <input
//               className="w-full p-2 border border-sky-600 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
//               placeholder="Email"
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//             />
//             <input
//               type="date"
//               className="w-full p-2 border border-sky-600 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
//               value={formData.date}
//               onChange={(e) =>
//                 setFormData({ ...formData, date: e.target.value })
//               }
//             />
//             <input
//               type="time"
//               className="w-full p-2 border border-sky-600 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
//               value={formData.time}
//               onChange={(e) =>
//                 setFormData({ ...formData, time: e.target.value })
//               }
//             />
//             <button className="w-full bg-indigo-800 text-white py-2 rounded-lg hover:bg-green-700 transition">
//               Confirm Booking
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../data/doctors";
import emailjs from "emailjs-com";

export default function BookAppointment() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.date || !formData.time) {
      alert("Please fill all fields");
      return;
    }

    // Send email using EmailJS
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_subject: `Appointment with ${doctor.name}`,
      message: `Date: ${formData.date}, Time: ${formData.time}`,
    };

    emailjs
      .send(
        "service_e446e6o",
        "template_0d4u80d",
        templateParams,
        "Jy3Usgojvq5XoWDoI" // replace with EmailJS public key
      )
      .then(
        () => {
          console.log("Email sent successfully!");
          setSuccess(true);
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("There was an error sending the confirmation email.");
        }
      );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{
        backgroundImage:
          "url('https://media.gettyimages.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=StV1gAkbzgp14Us0XAfuIRoWo8iXO7CUwUOlh66Y9S0=')",
      }}
    >
      {success ? (
        // ✅ Success Message Card with Tick Image
        <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-10 text-center animate-fadeIn">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxGaS_JSRjPcWZN15_bPt74JUjeBmkCDFlOg&s"
            alt="Success Tick"
            className="mx-auto mb-4 w-16 h-16"
          />
          <h1 className="text-3xl font-bold text-green-700 mb-3">
            Appointment Confirmed!
          </h1>
          <p className="text-lg text-gray-800">
            {formData.name}, a confirmation email has been sent to{" "}
            <span className="font-semibold text-green-600">
              {formData.email}
            </span>
          </p>
        </div>
      ) : (
        // ✅ Booking Form Card
        <div className="max-w-md w-full bg-white/80 backdrop-blur-md shadow-2xl rounded-xl p-6 animate-fadeIn">
          <h1 className="text-2xl font-semibold text-center mb-4">
            Book Appointment with{" "}
            <span className="text-sky-600">{doctor.name}</span>
          </h1>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              className="w-full p-2 border border-sky-600 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              className="w-full p-2 border border-sky-600 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="date"
              className="w-full p-2 border border-sky-600 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
            />
            <input
              type="time"
              className="w-full p-2 border border-sky-600 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
              value={formData.time}
              onChange={(e) =>
                setFormData({ ...formData, time: e.target.value })
              }
            />
            <button className="w-full bg-indigo-800 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Confirm Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
