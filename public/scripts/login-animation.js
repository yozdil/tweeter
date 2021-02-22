const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector(".title");
const bird = document.querySelector(".bird img");
const login = document.querySelector(".login button");
const signup = document.querySelector(".signup button");

const credentials = document.querySelector(".credentials");
const heading = document.querySelector(".info h1");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 120;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 120;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  // Popout
  title.style.transform = "translateZ(100px)";
  bird.style.transform = "translateZ(100px) rotateZ(8deg";
  heading.style.transform = "translateZ(80px)";
  credentials.style.transform = "translateZ(60px)";
  login.style.transform = "translateZ(30px)";
  signup.style.transform = "translateZ(30px)";
  signup.style.transform = "translateZ(30px)";
});

// Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // Popback
  title.style.transform = "translateZ(0px)";
  bird.style.transform = "translateZ(0px) rotateZ(0deg)";
  login.style.transform = "translateZ(0px)";
  signup.style.transform = "translateZ(0px)";
  credentials.style.transform = "translateZ(0px)";
  heading.style.transform = "translateZ(0px)";
});
