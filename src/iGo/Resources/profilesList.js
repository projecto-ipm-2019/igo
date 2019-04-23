import logo from './logo.svg'

export const profilesList = [
  {
    name: "João Primeiro",
    friendshipStatus: {
      isFriend: true,
      isPending: false,
      isRequest: false
    },
    photo: logo,
    id: 1,
    posts: [
      "Fui à praia pela primeira vez!",
      "O cachorro já tem nome, GUZI!"
    ]
  },
  {
    name: "André Segundo",
    friendshipStatus: {
      isFriend: false,
      isPending: false,
      isRequest: false
    },
    photo: logo,
    id: 2,
    posts: [
      "Nunca fui à praia. Alguém me leva?"
    ]
  },
  {
    name: "Madalena Gonçalves",
    friendshipStatus: {
      isFriend: true,
      isPending: false,
      isRequest: false
    },
    photo: logo,
    id: 3,
    posts: []
  },
  {
    name: "Maria Maia",
    friendshipStatus: {
      isFriend: false,
      isPending: false,
      isRequest: true
    },
    photo: logo,
    id: 4,
    posts: [
      "Vou apagar o iGo!",
      "O iGo não pára de mandar notificações inúteis!!!",
      "Where can iGo today? Ahaha o meu inglês é tão bom!",
      "O evento de ontem deixou-me de rastos"
    ]
  }
];