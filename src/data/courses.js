import Card1 from "../assets/card-1.png";
import Card2 from "../assets/card-2.png";
import Card3 from "../assets/card-3.png";
import Card4 from "../assets/card-4.png";
import Card5 from "../assets/card-5.png";
import Card6 from "../assets/card-6.png";
import Card7 from "../assets/card-7.png";
import Card8 from "../assets/card-8.png";
import Card9 from "../assets/card-9.png";
import Avatar1 from "../assets/img_avatar_1.jpg";
import Avatar2 from "../assets/img_avatar_2.jpg";
import Avatar3 from "../assets/img_avatar_3.jpg";
import Avatar4 from "../assets/img_avatar_4.jpg";
import Avatar5 from "../assets/img_avatar_5.jpg";
import Avatar6 from "../assets/img_avatar_6.jpg";
import Avatar7 from "../assets/img_avatar_7.jpg";
import Avatar8 from "../assets/img_avatar_8.jpg";
import Avatar9 from "../assets/img_avatar_9.jpg";

const courses = [
  {
    id: 1,
    invoice: 1,
    image: `${Card1}`,
    name: "Big 4 Auditor Financial Analyst",
    description:
      "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    career: "Financial Analyst",
    tutor: {
      image: `${Avatar1}`,
      name: "Jenna Ortega",
      jobTitle: "Senior Accountant",
      company: "Gojek",
    },
    rating: {
      stars: 4.5,
      count: 36,
    },
    price: 300000,
    field: "Bisnis",
  },
  {
    id: 2,
    invoice: 2,
    image: `${Card2}`,
    name: "Fullstack Web Development",
    description:
      "Mulai programming dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
    career: "Fullstack Web Developer",
    tutor: {
      image: `${Avatar2}`,
      name: "Kathryn Winona",
      jobTitle: "Senior Software Engineer",
      company: "Amazon",
    },
    rating: {
      stars: 4.5,
      count: 40,
    },
    price: 500000,
    field: "Pemrograman",
  },
  {
    id: 3,
    invoice: 3,
    image: `${Card3}`,
    name: "Advanced Data Analyst",
    description:
      "Mempelajari mulai dari Rumus-rumus Microsoft Excel hingga fungsinya",
    career: "Data Analyst",
    tutor: {
      image: `${Avatar9}`,
      name: "Sean Kim",
      jobTitle: "Senior Data Analyst",
      company: "Alphabet",
    },
    rating: {
      stars: 4.5,
      count: 54,
    },
    price: 350000,
    field: "Bisnis",
  },
  {
    id: 4,
    invoice: 4,
    image: `${Card4}`,
    name: "The Ultimate React Course",
    description: "Menguasai React dari nol hingga fitur-fitur yang tersedia",
    career: "Frontend Developer",
    tutor: {
      image: `${Avatar5}`,
      name: "Bryan Lau",
      jobTitle: "Frontend Developer",
      company: "Diffco",
    },
    rating: {
      stars: 4.5,
      count: 44,
    },
    price: 290000,
    field: "Pemrograman",
  },
  {
    id: 5,
    invoice: 5,
    image: `${Card5}`,
    name: "Digital Marketing",
    description:
      "Peserta akan dibekali pengetahuan dan praktik terkait dasar-dasar pemasaran, riset pasar, perencanaan anggaran, dan laporan bulanan.",
    career: "Digital Marketer",
    tutor: {
      image: `${Avatar4}`,
      name: "Sarah Samantha",
      jobTitle: "Marketing Manager",
      company: "Alibaba",
    },
    rating: {
      stars: 4.5,
      count: 54,
    },
    price: 250000,
    field: "Pemasaran",
  },
  {
    id: 6,
    invoice: 6,
    image: `${Card6}`,
    name: "Graphic Design Masterclass",
    description:
      "Untuk menjawab tantangan di bidang desain grafis dan advertising yang penuh tantangan dan persaingan yang ketat.",
    career: "Graphic Designer",
    tutor: {
      image: `${Avatar8}`,
      name: "Lindsay Marshall",
      jobTitle: "Art Director",
      company: "Crayon",
    },
    rating: {
      stars: 4.5,
      count: 35,
    },
    price: 250000,
    field: "Desain",
  },
  {
    id: 7,
    invoice: 7,
    image: `${Card7}`,
    name: "Adobe Photoshop",
    description:
      "Mempelajari mulai dari mengedit foto, membuat desain, dan mengolah gambar digital",
    career: "Graphic Designer",
    tutor: {
      image: `${Avatar6}`,
      name: "Cornell Koel",
      jobTitle: "Graphic Designer",
      company: "Rainbow Creative",
    },
    rating: {
      stars: 4.5,
      count: 35,
    },
    price: 290000,
    field: "Desain",
  },
  {
    id: 8,
    invoice: 8,
    image: `${Card8}`,
    name: "Corporate Finance",
    description:
      "Menguasai ilmu yang berkaitan dengan pengelolaan keuangan perusahaan",
    career: "Financial Analyst",
    tutor: {
      image: `${Avatar7}`,
      name: "Lily Uma",
      jobTitle: "Financial Analyst",
      company: "Alians Group",
    },
    rating: {
      stars: 4.5,
      count: 32,
    },
    price: 250000,
    field: "Bisnis",
  },
  {
    id: 9,
    invoice: 9,
    image: `${Card9}`,
    name: "iOS App Development",
    description:
      "Kursus yang mengajarkan tentang pengembangan aplikasi untuk perangkat iOS",
    career: "iOS Developer",
    tutor: {
      image: `${Avatar3}`,
      name: "Angela Lee",
      jobTitle: "Senior iOS Developer",
      company: "Apple",
    },
    rating: {
      stars: 4.5,
      count: 48,
    },
    price: 350000,
    field: "Pemrograman",
  },
];

export default courses;
