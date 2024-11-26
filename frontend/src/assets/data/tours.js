import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";
import tourImg09 from "../images/tour-img09.jpg";
import tourImg10 from "../images/tour-img10.jpg";
import tourImg11 from "../images/tour-img11.jpg";
import tourImg12 from "../images/tour-img12.jpg";
import tourImg13 from "../images/tour-img13.jpg";
import tourImg14 from "../images/tour-img14.jpg";
import tourImg15 from "../images/tour-img15.jpg";

const tours = [
  {
    id: "01",
    title: "Gateway of India",
    city: "Mumbai",
    address: "Apollo Bandar, Mumbai",
    distance: 300,
    price: 99,
    maxGroupSize: 10,
    desc: "An iconic arch-monument located in the city of Mumbai.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
      {
        name: "Jane Doe",
        rating: 5,
      },
    ],
    avgRating: 4.8,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Backwaters of Kerala",
    city: "Alleppey",
    address: "Alleppey, Kerala",
    distance: 400,
    price: 96,
    maxGroupSize: 8,
    desc: "Experience the serene beauty of Kerala's famous backwaters.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Snowy Peaks, Himachal Pradesh",
    city: "Shimla",
    address: "Somewhere in Himachal Pradesh",
    distance: 500,
    price: 76,
    maxGroupSize: 8,
    desc: "Explore the breathtaking snowy peaks of Shimla and beyond.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Golden Sunrise at Kanyakumari",
    city: "Kanyakumari",
    address: "Kanyakumari, Tamil Nadu",
    distance: 500,
    price: 85,
    maxGroupSize: 8,
    desc: "Witness the spectacular sunrise at India's southernmost tip.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Nanda Devi Valley",
    city: "Uttarakhand",
    address: "Somewhere in Uttarakhand",
    distance: 500,
    price: 75,
    maxGroupSize: 8,
    desc: "Explore the pristine valleys around the Nanda Devi peak.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Cherry Blossoms in Shillong",
    city: "Shillong",
    address: "Shillong, Meghalaya",
    distance: 500,
    price: 88,
    maxGroupSize: 8,
    desc: "Experience the beauty of cherry blossoms in Shillong.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.4,
      },
    ],
    avgRating: 4.4,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Hawa Mahal",
    city: "Jaipur",
    address: "Hawa Mahal Road, Jaipur, Rajasthan",
    distance: 500,
    price: 79,
    maxGroupSize: 8,
    desc: "The iconic pink palace known for its unique architecture.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Snowy Mountains of Gulmarg",
    city: "Gulmarg",
    address: "Somewhere in Jammu & Kashmir",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "Enjoy the stunning snowy landscapes of Gulmarg.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "09",
    title: "Dal Lake",
    city: "Srinagar",
    address: "Dal Lake, Srinagar, Jammu & Kashmir",
    distance: 400,
    price: 85,
    maxGroupSize: 6,
    desc: "Enjoy a peaceful Shikara ride on this stunning lake.",
    reviews: [
      {
        name: "Jane Doe",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: true,
  },
  {
    id: "10",
    title: "Charminar",
    city: "Hyderabad",
    address: "Char Kaman, Hyderabad, Telangana",
    distance: 200,
    price: 70,
    maxGroupSize: 10,
    desc: "A magnificent historical monument and symbol of Hyderabad.",
    reviews: [
      {
        name: "Jane Doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg10,
    featured: true,
  },
  {
    id: "11",
    title: "Rann of Kutch",
    city: "Bhuj",
    address: "Kutch, Gujarat",
    distance: 450,
    price: 96,
    maxGroupSize: 8,
    desc: "Explore the vast white salt desert and its cultural festivals.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg11,
    featured: true,
  },
  {
    id: "12",
    title: "Sundarbans Mangrove Forest",
    city: "Kolkata",
    address: "Sundarbans, West Bengal",
    distance: 500,
    price: 99,
    maxGroupSize: 8,
    desc: "A UNESCO World Heritage Site, home to the Royal Bengal Tiger.",
    reviews: [
      {
        name: "Jane Doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg12,
    featured: false,
  },
  {
    id: "13",
    title: "Ajanta Caves",
    city: "Aurangabad",
    address: "Ajanta, Maharashtra",
    distance: 350,
    price: 88,
    maxGroupSize: 12,
    desc: "Explore ancient Buddhist rock-cut caves adorned with beautiful frescoes.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg13,
    featured: false,
  },
  {
    id: "14",
    title: "Marina Beach",
    city: "Chennai",
    address: "Marina Beach, Chennai",
    distance: 300,
    price: 76,
    maxGroupSize: 10,
    desc: "Relax at one of India's most iconic beaches.",
    reviews: [
      {
        name: "Jane Doe",
        rating: 4.4,
      },
    ],
    avgRating: 4.4,
    photo: tourImg14,
    featured: false,
  },
  {
    id: "15",
    title: "Meenakshi Temple",
    city: "Madurai",
    address: "Madurai, Tamil Nadu",
    distance: 500,
    price: 95,
    maxGroupSize: 8,
    desc: "A spectacular temple complex dedicated to Goddess Meenakshi.",
    reviews: [
      {
        name: "John Doe",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg15,
    featured: true,
  },
];

export default tours;

