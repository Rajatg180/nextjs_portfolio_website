// navbar items , to navifate between to different section
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

// grid item style
export const gridItems = [
  {
    id: 1,
    title:
      "A curious learner interested in the job role of Software Engineer. Where I can utilise my understanding of coding and software development to efficiently fulfil the requirements.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Library's & Framework's",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },
  {
    id: 5,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/grid.svg",
  },
];

// project data
export const projects = [
  {
    id: 1,
    title: "EstateEase",
    des: "A full-stack real estate app with the MERN stack, allowing users to create, edit, and search property listings with filters, pagination, and direct messaging to owners.",
    img: "/real-estate1.png",
    iconLists: ["/re.svg", "/js.svg","./redux.svg", "/tail.svg", "/node.png"],
    link: "https://github.com/Rajatg180/mern_realEstate",
    category: "Web",
  },
  {
    id: 2,
    title: "AiBlog App",
    des: "Developed a full-stack blog application using Flutter, featuring AI-generated blog content, blog summaries via API, Firebase authentication, Bloc & Cubit state management, Hive for offline access, and implemented SOLID principles with Clean Architecture and dependency injection using get_it.",
    img: "/aiblog.png",
    iconLists: ["/flutter.webp", "/dart.png","firebase.svg","/api.svg","/bloc.png"],
    link: "https://github.com/Rajatg180/ai_blog_bloc_clean_architecture",
    category: "Android",
  },
  {
    id: 3,
    title: "CryptoVista",
    des: "Implemented real-time API data fetching for up-to-date cryptocurrency prices, trends, and news, and developed an interactive graph visualization feature for historical price analysis with both dark and light themes using Flutter and Dart.",
    img: "/cryptovista.jpg",
    iconLists: ["/flutter.webp", "/dart.png","/api.svg"],
    link: "https://github.com/Rajatg180/cryptoVista",
    category: "Android",
  },
  
  {
    id: 7,
    title: "Netflix-Gpt",
    des: "A movie recommendation web application using React and Tailwind CSS with multiple languages support.",
    img: "/nextflixgpt.png",
    iconLists: ["/re.svg", "/js.svg","./redux.svg","/tail.svg","/firebase.svg"],
    link: "https://github.com/Rajatg180/NetflixGPT",
    category: "Web",
  },
  {
    id: 6,
    title: "Groupiee",
    des: "A feature-rich group chat application using Flutter, Dart, and Firebase, supporting real-time communication with features like email and password authentication, group creation, joining groups, and viewing group information.",
    img: "/groupie.jpg",
    iconLists: ["/flutter.webp", "/dart.png","firebase.svg"],
    link: "https://github.com/Rajatg180/groupiee",
    category: "Android",
  },
  
  {
    id: 4,
    title: "FitZone",
    des: "Developed an interactive gym website using React and Material UI, featuring exercise search via Rapid API, instructional videos from YouTube API, and enhanced user engagement with pagination, similar exercise recommendations, and visual workout guidance.",
    img: "/fitzone.png",
    iconLists: ["/re.svg", "/js.svg","/api.svg","materialui.png"],
    link: "https://github.com/Rajatg180/fitZone",
    category: "Web",
  },
  {
    id: 8,
    title: "Portfolio Website",
    des: "Developed a dynamic and responsive portfolio website using Next.js, Tailwind CSS, Aceternity UI, and TypeScript, featuring a modern, visually appealing design.",
    img: "/portfolio.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg","/act.png"],
    link: "https://github.com/Rajatg180",
    category: "Web",
  },
];


// workExperience Data
export const workExperience = [
  {
    id: 1,
    title: "Mobile App Developer Intern - ExpandX Pvt Ltd ",
    duration: "1st Feb 23 - 31st March 23",
    desc: "• Designed and implemented user interface (UI) for the ExpandX app, integrate REST API for allowing seamless communication between the app and external server/database. • Utilized Flutter framework and Dart programming language to develop and implement various features and functionalities of the ExpandX app. • Worked on Firebase for real-time data synchronization, authentication, and cloud storage, enhancing the overall performance and reliability of the app.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Developer Intern - Intern Crowd",
    duration: " 22nd March 23 - 22nd April 23",
    desc: "• Accomplished three tasks successfully, including the development of a full-stack application. • Worked on Flutter, Firebase, and Dart technologies for seamless cross-platform mobile app development, real-time data synchronization, user authentication, and efficient code implementation.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];


// education data
export const education = [
  {
    id: 1,
    title: "D.Y.Patil College Of Engineering Akurdi, Pune",
    desc: "B.E Information Technology",
    duration: "2020-2024",
  },
  {
    id: 2,
    desc: "HSC",
    title: "Vidyadham Science Junior College, SambhajiNagar",
    duration: "2018-2020",
  },
  {
    id: 2,
    desc: "SSC",
    title: "Aurobindo Aksharjyoti English School, Parbhani",
    duration: "2017-2018",
  },
];

// contact me data
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Rajatg180",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rajat-gore-098088228/",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/RajatGore3",
  },
  {
    id: 5,
    img: "/medium.svg",
    link: "https://medium.com/@rajatgore1803",
  },
  {
    id: 4,
    img: "/instagram.svg",
    link: "https://www.instagram.com/rajat_gore_1803/",
  },
];

// extra data (not used)

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];
