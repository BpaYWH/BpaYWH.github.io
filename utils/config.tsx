type TPage = {
   name: string;
   path: string;
   description?: string;
   image?: string;
};

type TTech = {
   name: string;
   icon: string;
};

export const LabPageList: TPage[] = [
   {
      name: "File Explorer",
      path: "file-explorer",
      description: "A React component visualizing the file system",
      image: "/assets/image/file-explorer.jpg",
   },
   {
      name: "Reverse Linked List",
      path: "reverse-linked-list",
      description: "Visualize the process of reversing a linked list",
      image: "/assets/image/linked-list.jpg",
   },
   {
      name: "Read It Quick",
      path: "read-it-quick",
      description: "Bolding text strategically to help you read",
      image: "/assets/image/opened-books.jpg",
   },
   {
      name: "Aim Trainer",
      path: "aim-training",
      description: "Train your mouse control",
      image: "/assets/image/aim.jpg",
   },
   // {
   //    name: "Expenses",
   //    path: "expenses",
   //    description: "Track your expenses",
   //    image: "",
   // },
   {
      name: "Bid Room",
      path: "bid-room",
      description: "",
      image: ""
   }
];

export const ProjectPageList: TPage[] = [
   {
      name: "Swimmer Performance Analysis",
      path: "swimmer-performance-analysis",
      description: "A patented system that analyzes the performance of a swimmer",
      image: "/assets/image/Swimmer-Performance-Analysis/Thumbnail.png"
   },
   {
      name: "Smart Rehab",
      path: "smart-rehab",
      description: "Remote rehabilitation assistant ",
      image: "/assets/image/Rehab/Rehab-Thumbnail.jpeg"
   },
   {
      name: "Robocoach",
      path: "robocoach",
      description: "Remote excercise coach",
      image: "/assets/image/Robocoach/thumbnail.png"
   }
];

export const langStacks: TTech[] = [
   {
      name: "JavaScript",
      icon: "/assets/image/icon/lang/javascript-color.svg"
   },
   {
      name: "TypeScript",
      icon: "/assets/image/icon/lang/typescript-color.svg"
   },
   {
      name: "HTML5",
      icon: "/assets/image/icon/lang/html5-color.svg"
   },
   {
      name: "CSS3",
      icon: "/assets/image/icon/lang/css3-color.svg"
   },
   {
      name: "C#",
      icon: "/assets/image/icon/lang/csharp-color.svg"
   },
   {
      name: "C++",
      icon: "/assets/image/icon/lang/cplusplus-color.svg"
   },
   {
      name: "Python",
      icon: "/assets/image/icon/lang/python-color.svg"
   },
   {
      name: "PHP",
      icon: "/assets/image/icon/lang/php-color.svg"
   },
   {
      name: "Go",
      icon: "/assets/image/icon/lang/go-color.svg"
   }
];

export const frontendStacks: TTech[] = [
   {
      name: "React.JS",
      icon: "/assets/image/icon/frontend/react-color.svg"
   },
   {
      name: "Next.JS",
      icon: "/assets/image/icon/frontend/nextdotjs-color.svg"
   },
   {
      name: "TailwindCSS",
      icon: "/assets/image/icon/frontend/tailwindcss-color.svg"
   },
   {
      name: "Sass",
      icon: "/assets/image/icon/frontend/sass-color.svg"
   },

   {
      name: "Material UI",
      icon: "/assets/image/icon/frontend/mui-color.svg"
   },
   {
      name: "Bootstrap",
      icon: "/assets/image/icon/frontend/bootstrap-color.svg"
   },

   {
      name: "Framer Motion",
      icon: "/assets/image/icon/frontend/framer-color.svg"
   },
   {
      name: "RadixUI",
      icon: "/assets/image/icon/frontend/radixui-color.svg"
   },
   {
      name: "Ant Design",
      icon: "/assets/image/icon/frontend/antdesign-color.svg"
   },

];

export const backendStacks: TTech[] = [
   {
      name: "Node.js",
      icon: "/assets/image/icon/backend/nodedotjs-color.svg"
   },
   {
      name: ".Net",
      icon: "/assets/image/icon/backend/dotnet-color.svg"
   },
   {
      name: "Laravel",
      icon: "/assets/image/icon/backend/laravel-color.svg"
   },
   {
      name: "PostgreSQL",
      icon: "/assets/image/icon/backend/postgresql-color.svg"
   },
   {
      name: "MongoDB",
      icon: "/assets/image/icon/backend/mongodb-color.svg"
   },
   {
      name: "Prisma",
      icon: "/assets/image/icon/backend/prisma-color.svg"
   },
   {
      name: "GraphQL",
      icon: "/assets/image/icon/backend/graphql-color.svg"
   },
   {
      name: "Docker",
      icon: "/assets/image/icon/backend/docker-color.svg"
   }
];

export const techStacksList: TTech[] = [
   {
      name: "Amazon Web Service",
      icon: "/assets/image/icon/tech/amazonaws-color.svg"
   },
      {
      name: "Adobe XD",
      icon: "/assets/image/icon/tech/adobexd-color.svg"
   },
   {
      name: "Webpack",
      icon: "/assets/image/icon/tech/webpack-color.svg"
   },
   {
      name: "Vite",
      icon: "/assets/image/icon/tech/vite-color.svg"
   },
   {
      name: "Figma",
      icon: "/assets/image/icon/tech/figma-color.svg"
   },
   {
      name: "Bun",
      icon: "/assets/image/icon/tech/bun-color.svg"
   },
   {
      name: "Jest",
      icon: "/assets/image/icon/tech/jest-color.svg"
   },
   {
      name: "Jira",
      icon: "/assets/image/icon/tech/jira-color.svg"
   },
   {
      name: "npm",
      icon: "/assets/image/icon/tech/npm-color.svg"
   },
   {
      name: "Github Actions",
      icon: "/assets/image/icon/tech/githubactions-color.svg"
   },
   {
      name: "Git",
      icon: "/assets/image/icon/tech/github-mark.svg"
   }
];
