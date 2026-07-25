let users = [
  {
    name: "Kabir Singh",
    pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500",
    bio: "less talk, more action ⚡",
  },
  {
    name: "Ananya Roy",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    bio: "living life one playlist at a time 🎧",
  },
  {
    name: "Aarav Sharma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    bio: "coffee, code & late-night thoughts ☕💻",
  },
  {
    name: "Kiara Mehta",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500",
    bio: "dream big, stay humble ✨",
  },
  {
    name: "Rohan Verma",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    bio: "finding peace one sunset at a time 🌅",
  },
  {
    name: "Amisha Rathore",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    bio: "silent chaos in a loud world 🖤 | not for everyone",
  },
  {
    name: "Sara Khan",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500",
    bio: "books, beaches & black coffee 📚🌊",
  },
  {
    name: "Vivaan Joshi",
    pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=500",
    bio: "explore. learn. repeat. 🌍",
  },
  {
    name: "Meera Kapoor",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500",
    bio: "smiles are always in fashion 😊",
  },
  {
    name: "Arjun Malhotra",
    pic: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=500",
    bio: "building my future one step at a time 🚀",
  },
];

// sare users show karwana

// filter karana har bar input karne par

//show karna filter users ko
// div card - img + content - h3 + p

const cards = document.querySelector("#cards");
const inp = document.querySelector("#inp");
const showUsers = (arr) => {
  arr.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = user.pic;

    const content = document.createElement("div");
    content.classList.add("content");

    const blur = document.createElement("div");
    blur.classList.add("blurred-layer");

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    // cards.classList.remove("toggle");
    content.append(h3, p);
    card.append(img, blur, content);
    cards.append(card);
  });
};

const notFound = document.querySelector("#noUser");

showUsers(users);

inp.addEventListener("input", () => {
  const search = inp.value.toLowerCase().trim();
  let newUsers = users.filter((user) => {
    return user.name.toLowerCase().startsWith(search);
  });
  cards.innerHTML = "";

  if (newUsers.length === 0) {
    notFound.classList.remove("toggle");
    console.log("No users");
  } else {
    if (!notFound.classList.contains("toggle")) {
      notFound.classList.add("toggle");
      showUsers(newUsers);
    } else {
      showUsers(newUsers);
    }
  }
});

// no user "User NOt Found " message display karna h

const loginPage = document.querySelector("#login");

const loginBtn = document.querySelector("#loginBtn");

const homeBtn = document.querySelector("#homeBtn");

homeBtn.addEventListener("click", () => {
  loginPage.classList.add("toggle");
});

loginBtn.addEventListener("click", () => {
  loginPage.classList.remove("toggle");
});

const name = document.querySelector("#name");
const pic = document.querySelector("#pic");
const bio = document.querySelector("#bio");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {};

  user.name = name.value;
  user.pic =
    pic.value ||
    "https://i.pinimg.com/control1/1200x/d9/3d/ee/d93dee01d7bfe87790e939b2e7931aa2.jpg";
  user.bio = bio.value;

  users.unshift(user);
  cards.innerHTML = "";
  loginPage.classList.add("toggle");
  console.log(users);
  showUsers(users);
  form.reset();
});
