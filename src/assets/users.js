export const users = [
  {
    id: 1,
    username: "_AhsanAUA",
    firstName: "Ahsan",
    lastName: "Faisal",
    email: "auawgamers@gmail.com",
    isAdmin: true,
    twoots: [
      {
        id: 1,
        body: "Twiter App made by me",
      },
      {
        id: 2,
        body: "Hello World",
      },
    ],
  },
  {
    id: 2,
    username: "kanrakura00",
    firstName: "Kanra",
    lastName: "Kura",
    email: "kanraislanra420@gmail.com",
    isAdmin: false,
    twoots: [
      {
        id: 1,
        body: "Am a Weeabo by the way",
      },
      {
        id: 2,
        body: "#Kanra is not Lanra. Please Dont bully",
      },
      {
        id: 3,
        body: "Hey I am Kanra",
      },
    ],
  },
  {
    id: 3,
    username: "CHUNJAMAN23",
    firstName: "Uzair",
    lastName: "Faisal",
    email: "chunjaboi@gmail.com",
    isAdmin: false,
    twoots: [],
  },
];

fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
  res.json().then((json) => {
    users[2].twoots = json;
  });
});
