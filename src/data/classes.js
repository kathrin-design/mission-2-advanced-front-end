import Avatar1 from "../assets/avatar/img_avatar_1.jpg";
import Avatar2 from "../assets/avatar/img_avatar_2.jpg";
import Avatar5 from "../assets/avatar/img_avatar_5.jpg";
import Avatar9 from "../assets/avatar/img_avatar_9.jpg";

const classData = [
  {
    id: 1,
    name: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    tutor: {
      image: `${Avatar1}`,
      name: "Jenna Ortega",
      jobTitle: "Senior Accountant",
      company: "Gojek",
    },
    modul: "12",
    status: "Selesai",
    progress: 100,
  },
  {
    id: 2,
    name: "Fullstack Web Development",
    description:
      "Mulai programming dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    tutor: {
      image: `${Avatar2}`,
      name: "Kathryn Winona",
      jobTitle: "Senior Software Engineer",
      company: "Amazon",
    },
    modul: "2",
    status: "Sedang Berjalan",
    progress: 28,
  },
  {
    id: 3,
    name: "Advanced Data Analyst",
    description:
      "Mempelajari mulai dari Rumus-rumus Microsoft Excel hingga fungsinya",
    tutor: {
      image: `${Avatar9}`,
      name: "Sean Kim",
      jobTitle: "Senior Data Analyst",
      company: "Alphabet",
    },
    modul: "2",
    status: "Sedang Berjalan",
    progress: 28,
  },
  {
    id: 4,
    name: "The Ultimate React Course",
    description: "Menguasai React dari nol hingga fitur-fitur yang tersedia",
    tutor: {
      image: `${Avatar5}`,
      name: "Bryan Lau",
      jobTitle: "Frontend Developer",
      company: "Diffco",
    },
    modul: "10",
    status: "Selesai",
    progress: 100,
  },
];

export default classData;
