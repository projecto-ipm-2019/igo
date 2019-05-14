import logo from './logo.svg';
import queima1 from './queima/download.jpeg';
import queima2 from './queima/Queima das Fitas 17_755x470.jpg'
import location from './queima/location.png'
import uuid4 from 'uuid/v4'

export const eventsList = [
  {
    name: "Queima das Fitas",
    photoAlbum: [queima1, queima2],
    id: 1,
    location: {
      name: "Coimbra",
      distance: 420,
      coordinates: [100, 100],
      map: location
    },
    recent: 0,
    recommend: 100,
    interested: true,
    ticket: uuid4(),
    date: "03-May-2019",
    price: 0
  },
  {
    name: "LisbOn",
    photoAlbum: [logo, logo, logo],
    id: 2,
    location: {
      name: "Parque Eduardo Sétimo",
      distance: 1,
      coordinates: [0, 0],
      map: location
    },
    recommend: 50,
    interested: false,
    ticket: null,
    date: "06-Sep-2019",
    price: 30
  },
  {
    name: "Super Bock Super Rock",
    photoAlbum: [logo, logo, logo],
    id: 3,
    location: {
      name: "Parque das Nações",
      distance: 42,
      coordinates: [42, 42],
      map: location
    },
    recommend: 100,
    interested: true,
    ticket: null,
    date: "18-Jul-2019",
    price: 100
  },
  {
    name: "Sumol Summer Fest",
    photoAlbum: [logo],
    id: 4,
    location: {
      name: "Ericeira",
      distance: 4200,
      coordinates: [420, 420],
      map: location
    },
    recommend: 75,
    interested: false,
    ticket: null,
    date: "05-Jul-2019",
    price: 20
  },
  {
    name: "MUSA",
    photoAlbum: [logo],
    id: 5,
    location: {
      name: "Cascais",
      distance: 1323,
      coordinates: [12, 13],
      map: location
    },
    recommend: 20,
    interested: false,
    ticket: null,
    date: "04-Jul-2019",
    price: 15
  },
  {
    name: "MEO Sudoeste",
    photoAlbum: [logo, logo, logo, logo, logo, logo, logo, logo],
    id: 6,
    location: {
      name: "Zambujeira do Mar",
      distance: 9001,
      coordinates: [-100, -100],
      map: location
    },
    recommend: 20,
    interested: false,
    ticket: null,
    date: "06-Aug-2019",
    price: 80
  },
  {
    name: "Rapture Party",
    photoAlbum: [],
    id: 7,
    location: {
      name: "Rapture",
      distance: 42000,
      coordinates: [],
      map: location
    },
    recommend: 100,
    interested: true,
    ticket: null,
    date: "31-Dec-1958",
    price: 420
  }
];