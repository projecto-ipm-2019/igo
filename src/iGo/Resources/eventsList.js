import logo from './logo.svg';

export const eventsList = [
  {
    name: "Queima das Fitas",
    photoAlbum: [logo],
    id: 1,
    location: {
      name: "Coimbra",
      distance: 420,
      coordinates: [100, 100]
    },
    recent: 0,
    recommend: 100,
    interested: true,
    ticket: null
  },
  {
    name: "LisbOn",
    photoAlbum: [logo, logo, logo],
    id: 2,
    location: {
      name: "Parque Eduardo Sétimo",
      distance: 1,
      coordinates: [0, 0]
    },
    recommend: 50,
    interested: false,
    ticket: null
  },
  {
    name: "Super Bock Super Rock",
    photoAlbum: [logo, logo, logo],
    id: 3,
    location: {
      name: "Parque das Nações",
      distance: 42,
      coordinates: [42, 42]
    },
    recommend: 100,
    interested: true,
    ticket: null
  },
  {
    name: "Sumol Summer Fest",
    photoAlbum: [logo],
    id: 4,
    location: {
      name: "Ericeira",
      distance: 4200,
      coordinates: [420, 420]
    },
    recommend: 75,
    interested: false,
    ticket: null
  },
  {
    name: "MUSA",
    photoAlbum: [logo],
    id: 5,
    location: {
      name: "Cascais",
      distance: 1323,
      coordinates: [12, 13]
    },
    recommend: 20,
    interested: false,
    ticket: null
  },
  {
    name: "MEO Sudoeste",
    photoAlbum: [logo, logo, logo, logo, logo, logo, logo, logo],
    id: 6,
    location: {
      name: "Zambujeira do Mar",
      distance: 9001,
      coordinates: [-100, -100]
    },
    recommend: 20,
    interested: false,
    ticket: null
  },
  {
    name: "Rapture Party",
    photoAlbum: [],
    id: 7,
    location: {
      name: "Rapture",
      distance: 42000,
      coordinates: []
    },
    recommend: 100,
    interested: true,
    ticket: null
  }
];