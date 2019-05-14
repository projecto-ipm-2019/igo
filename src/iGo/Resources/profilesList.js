import photo79718 from './79718.jpg'
import photo83500 from './83500.jpg'

export const profilesList = [
  {
    name: "João Primeiro",
    friendshipStatus: {
      isFriend: true,
      isPending: false,
      isRequest: false
    },
    photo: null,
    id: 1,
    posts: [
      "Fui à praia pela primeira vez!",
      "O cachorro já tem nome, GUZI!"
    ],
    location: {
      distance: 1,
    },
    recent: 0,
    recommend: 100,
    isContact: false,
    events: [3]
  },
  {
    name: "André Segundo",
    friendshipStatus: {
      isFriend: false,
      isPending: false,
      isRequest: false
    },
    photo: null,
    id: 2,
    posts: [
      "Nunca fui à praia. Alguém me leva?"
    ],
    location: {
      distance: 420,
    },
    recent: 0,
    recommend: 50,
    isContact: false,
    events: [2,4,5,6]
  },
  {
    name: "Madalena Gonçalves",
    friendshipStatus: {
      isFriend: true,
      isPending: false,
      isRequest: false
    },
    photo: null,
    id: 3,
    posts: [],
    location: {
      distance: 42,
    },
    recent: 25,
    recommend: 100,
    isContact: false,
    events: []
  },
  {
    name: "Maria Maia",
    friendshipStatus: {
      isFriend: false,
      isPending: false,
      isRequest: true
    },
    photo: null,
    id: 4,
    posts: [
      "Vou apagar o iGo!",
      "O iGo não pára de mandar notificações inúteis!!!",
      "Where can iGo today? Ahaha o meu inglês é tão bom!",
      "O evento de ontem deixou-me de rastos"
    ],
    location: {
      distance: 4200,
    },
    recent: 0,
    recommend: 75,
    isContact: false,
    events: [1, 2]
  },
  {
    name: "André Santos",
    friendshipStatus: {
      isFriend: true,
      isPending: false,
      isRequest: false
    },
    photo: photo79718,
    id: 5,
    posts: [
      "I'm singing in the rain.",
      "Boa sorte com a Elsa!"
    ],
    location: {
      distance: 23,
    },
    recent: 10,
    recommend: 100,
    isContact: true,
    events: [7]
  },
  {
    name: "Luís Pedro",
    friendshipStatus: {
      isFriend: false,
      isPending: false,
      isRequest: true,
    },
    photo: photo83500,
    id: 6,
    posts: ["No post"],
    location: {
      distance: 50,
    },
    recent: 0,
    recommend: 100,
    isContact: true,
    events: []
  }
];