import doc1 from "../assets/assets_frontend/doc1.png";
import doc2 from "../assets/assets_frontend/doc2.png";
import doc3 from "../assets/assets_frontend/doc3.png";
import doc4 from "../assets/assets_frontend/doc4.png";
import doc5 from "../assets/assets_frontend/doc5.png";
import doc6 from "../assets/assets_frontend/doc6.png";
import doc7 from "../assets/assets_frontend/doc7.png";
import doc8 from "../assets/assets_frontend/doc8.png";
export const doctors = [
  {
    id: 1,
    name: "Dr. Asha Verma",
    specialization: "Cardiologist",
    // image: "./assets/assets_frontend/doc1.png",
    image: doc2,

    availability: "Available Today",
    bio: "10 years experience in heart care.",
    schedule: [
      { date: "2025-08-01", time: "10:00 AM - 12:00 PM" },
      { date: "2025-08-02", time: "2:00 PM - 4:00 PM" },
    ],
  },
  {
    id: 2,
    name: "Dr. Ramesh Gupta",
    specialization: "Dermatologist",
    image: doc1,
    availability: "On Leave",
    bio: "Expert in skin diseases.",
    schedule: [],
  },
  {
    id: 3,
    name: "Dr. Meera Nair",
    specialization: "Pediatrician",
    image: doc3,
    availability: "Available Tomorrow",
    bio: "Specialist in child healthcare with 8 years of experience.",
    schedule: [
      { date: "2025-08-02", time: "9:00 AM - 11:30 AM" },
      { date: "2025-08-03", time: "1:00 PM - 3:00 PM" },
    ],
  },
  {
    id: 4,
    name: "Dr. Sanjay Kulkarni",
    specialization: "Orthopedic Surgeon",
    image: doc4,
    availability: "Available Today",
    bio: "15 years of experience in bone and joint surgeries.",
    schedule: [
      { date: "2025-08-01", time: "3:00 PM - 5:00 PM" },
      { date: "2025-08-02", time: "11:00 AM - 1:00 PM" },
    ],
  },
  {
    id: 5,
    name: "Dr. Priya Menon",
    specialization: "Gynecologist",
    image: doc5,
    availability: "Available Today",
    bio: "12 years of experience in women’s healthcare.",
    schedule: [
      { date: "2025-08-01", time: "2:00 PM - 4:30 PM" },
      { date: "2025-08-03", time: "10:00 AM - 12:00 PM" },
    ],
  },
  {
    id: 6,
    name: "Dr. Arvind Sharma",
    specialization: "Neurologist",
    image: doc6,
    availability: "Available Next Week",
    bio: "Expert in treating disorders of the nervous system.",
    schedule: [
      { date: "2025-08-05", time: "9:00 AM - 12:00 PM" },
      { date: "2025-08-06", time: "1:00 PM - 3:00 PM" },
    ],
  },
  {
    id: 7,
    name: "Dr. Kavita Joshi",
    specialization: "ENT Specialist",
    image: doc7,
    availability: "Available Today",
    bio: "Specialist in ear, nose, and throat treatments with 7 years of experience.",
    schedule: [
      { date: "2025-08-01", time: "11:00 AM - 1:00 PM" },
      { date: "2025-08-02", time: "4:00 PM - 6:00 PM" },
    ],
  },
  {
    id: 8,
    name: "Dr. Nikhil Patil",
    specialization: "Psychiatrist",
    image: doc8,
    availability: "Available Tomorrow",
    bio: "Helping patients with mental health issues for over 9 years.",
    schedule: [
      { date: "2025-08-02", time: "2:00 PM - 5:00 PM" },
      { date: "2025-08-04", time: "10:00 AM - 12:30 PM" },
    ],
  },
];
