import { useParams, Link } from "react-router-dom";
import { doctors } from "../data/doctors";

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) return <p>Doctor not found</p>;

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{
        backgroundImage:
          "url('https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZyaG9zcGl0YWxfY29ycmlkb3Jfb3BlcmF0aW5nX3Jvb20taW1hZ2Uta3liZGduaGsuanBn.jpg')",
      }}
    >
      <div className="max-w-3xl w-full bg-yellow-600  shadow-2xl rounded-2xl p-8 transform transition duration-300 hover:scale-[1.02]">
        {/* Doctor Image */}
        <div className="flex flex-col items-center">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl font-bold text-white mt-4">{doctor.name}</h1>
          <p className="text-lg text-white">{doctor.specialization}</p>
        </div>

        {/* Bio */}
        <p className="text-center text-white mt-4 leading-relaxed">
          {doctor.bio}
        </p>

        {/* Availability */}
        <h2 className="mt-6 font-semibold text-xl text-white">Availability</h2>
        <ul className="list-disc pl-6 text-white">
          {doctor.schedule.length > 0 ? (
            doctor.schedule.map((s, idx) => (
              <li key={idx} className="mt-1">
                {s.date} - {s.time}
              </li>
            ))
          ) : (
            <p className="text-white">No upcoming availability</p>
          )}
        </ul>

        {/* Button */}
        <div className="text-center mt-8">
          <Link
            to={`/book/${doctor.id}`}
            className="bg-white text-indigo-950 px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
