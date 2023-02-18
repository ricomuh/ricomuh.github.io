const images = () => ({
  init() {
    setInterval(() => {
      this.turn++;
      if (this.turn >= this.imgs.length) this.turn = 0;
    }, 3000);
  },
  imgs: ["pp.png", "pp2.png"],
  turn: 0,
});
const typing = () => ({
  init() {
    setInterval(() => {
      if (this.i < this.descs[this.turn].length) {
        this.pointerShow = true;
        this.text += this.descs[this.turn][this.i];
        this.i++;
      } else {
        if (this.wait < this.waitMax) {
          if (this.wait % 6 == 0 && this.wait > 0)
            this.pointerShow = !this.pointerShow;
          this.wait++;
          return;
        } else {
          this.wait = 0;
          this.text = "";
          this.i = 0;
          this.turn++;
          if (this.turn >= this.descs.length) this.turn = 0;
        }
      }
    }, 100);
  },
  descs: [
    "Frontend Developer.",
    "Backend Programmer.",
    "College Student.",
    "Game Developer.",
  ],
  text: "",
  turn: 0,
  i: 0,
  wait: 0,
  waitMax: 30,
  pointerShow: true,
});
const socials = () => ({
  socials: [
    {
      name: "LinkedIn",
      icon: "fab fa-linkedin",
      class:
        "bg-gradient-to-t from-blue-700 to-blue-400 hover:to-blue-600 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center",
      link: "https://www.linkedin.com/in/rico-muhammad-012050195/",
      color: "text-gray-100",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      class:
        "bg-gradient-to-tr from-purple-600 to-yellow-400 hover:from-purple-500 hover:to-yellow-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center",
      link: "https://www.instagram.com/ngoding_seru/",
      color: "text-white",
    },
    {
      name: "Github",
      icon: "fab fa-github",
      class:
        "bg-gradient-to-tr from-gray-800 to-gray-600 hover:from-gray-700 hover:to-gray-500 duration-200 w-12 h-12 rounded-2xl shadow-lg flex justify-center items-center",
      link: "https://github.com/ricomuh",
      color: "text-gray-200",
    },
  ],
});
const skills = () => ({
  init() {
    setInterval(() => {
      // if the scroll y is more than #skills bottom, then ignore
      if (
        window.scrollY >
        document.querySelector("#skills").offsetTop +
          document.querySelector("#skills").offsetHeight / 2
      )
        return;
      switch (this.show) {
        case "frontend":
          this.show = "backend";
          break;
        case "backend":
          this.show = "game dev";
          break;
        default:
          this.show = "frontend";
          break;
      }
    }, 80000);
  },
  skills: [
    {
      type: "Frontend",
      items: [
        { name: "HTML", img: "html.webp" },
        { name: "CSS", img: "css.webp" },
        { name: "JavaScript", img: "js.jpg" },
        { name: "Bootstrap", img: "bootstrap.png" },
        { name: "jQuery", img: "jquery.png" },
        { name: "Tailwind", img: "tailwind.png" },
        { name: "next.js", img: "next.png" },
      ],
    },
    {
      type: "Backend",
      items: [
        { name: "PHP", img: "php.png" },
        { name: "Laravel", img: "laravel.png" },
        { name: "CodeIgniter", img: "ci.png" },
        { name: "MySQL", img: "mysql.png" },
        { name: "MongoDB", img: "mongo.png" },
        { name: "Node.js", img: "node.png" },
        { name: "Express.js", img: "express.png" },
      ],
    },
    {
      type: "Game Dev",
      items: [
        { name: "Unity", img: "unity.png" },
        { name: "C#", img: "csharp.png" },
        { name: "GameMaker", img: "gm.png" },
        { name: "Construct", img: "construct.png" },
        { name: "Socket.io", img: "socket.io.png" },
        { name: "Colyseus", img: "colyseus.png" },
      ],
    },
  ],
  show: "frontend",
});
const projects = () => ({
  projects: [
    {
      name: "PusingYo",
      desc: "PusingYo is a hexagonal tetris game that is made using the Construct engine for the MaenYo Platform.",
      type: "Game",
      landscape: false,
      img: ["pusingyo.jpg"],
      link: "https://play.google.com/store/apps/details?id=com.maenyo",
      linkPreview: "play.google.com",
    },
    {
      name: "Aqobah International School",
      desc: "Aqobah International School is a school that is located in the city of Jombang, East Java.",
      type: "Web",
      landscape: true,
      img: ["ais.jpg"],
      link: "https://aqobahinternational.sch.id/",
      linkPreview: "aqobahinternational.sch.id",
    },
    {
      name: "Dino Delivery",
      desc: "Dino Delivery is a game that is made using the Construct engine. The game is a delivery game that is made in the style of the 90s.",
      type: "Game",
      landscape: false,
      img: ["dino delivery.jpeg"],
    },
    {
      name: "Neptunus",
      desc: "Neptunus is a website that provides asset swap services for the crypto world.",
      type: "Web",
      landscape: true,
      img: ["neptunus.png"],
      link: "https://neptunus.io/",
      linkPreview: "neptunus.io",
    },
    {
      name: "Leolit Games",
      desc: "Leolit Games is a game development studio that is located in the city of Semarang, Central Java.",
      type: "Web",
      landscape: true,
      img: ["leolitgames.png"],
      link: "https://leolitgames.com/",
      linkPreview: "leolitgames.com",
    },
    {
      name: "Poke Cat - Battle Cat Strategy",
      desc: "Poke Cat is a game that is made using the GameMaker engine. The game is a battle game that is made in the style of carrom.",
      type: "Game",
      landscape: true,
      img: ["pokecat.png"],
      link: "https://play.google.com/store/apps/details?id=com.leolitgames.pokecat",
      linkPreview: "play.google.com",
    },
    {
      name: "Among Us - I'm not an Imposter",
      desc: "Among Us - I'm not an Imposter is a game that is made using the GameMaker engine. The game is a platformer game that is made in the style of retro.",
      type: "Game",
      landscape: true,
      img: ["amongus.webp"],
      link: "https://play.google.com/store/apps/details?id=com.RelicStudio.Astronot",
      linkPreview: "play.google.com",
    },
    {
      name: "TebangYo",
      desc: "TebangYo is a game that is made using the Construct engine. The game is a cutting game that is made for the MaenYo Platform.",
      type: "Game",
      landscape: false,
      img: ["tebangyo.png"],
      link: "https://play.google.com/store/apps/details?id=com.maenyo",
      linkPreview: "play.google.com",
    },
    {
      name: "Mustra Indonesia",
      desc: "Mustra Indonesia is a android game that is made using the Unity engine. The game is a game that is made for clients who want to make a game like piano tiles.",
      type: "Game",
      landscape: false,
      img: ["mustra indonesia.jpeg"],
    },
    {
      name: "INTFT",
      desc: "INTFT is a website that provides NFT creation services for the crypto world.",
      type: "Web",
      landscape: true,
      img: ["intft.jpg"],
    },
  ],
});
const contact = () => ({
  contact: [
    {
      name: "Email",
      icon: "mail",
      link: "mailto:rico@leolitgames.com",
    },
    {
      name: "Instagram",
      icon: "instagram",
      link: "https://instagram.com/ricochething.exe",
    },
    {
      name: "Github",
      icon: "github",
      link: "https://github.com/ricomuh",
    },
    {
      name: "Linkedin",
      icon: "linkedin",
      link: "https://www.linkedin.com/in/rico-muhammad-012050195/",
    },
  ],
});
document.addEventListener("alpine:init", () => {
  setTimeout(() => {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 25,
      speed: 400,
      glare: true,
      "max-glare": 0.5,
      reverse: true,
    });
    VanillaTilt.init(document.querySelectorAll(".project"), {
      max: 10,
      speed: 300,
      glare: true,
      "max-glare": 0.2,
      reverse: true,
    });
  }, 100);
});
