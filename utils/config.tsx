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

export const techStacksList: TTech[] = [
   {
      name: "JavaScript",
      icon: "/assets/image/icon/javascript-color.svg"
   },
   {
      name: "TypeScript",
      icon: "/assets/image/icon/typescript-color.svg"
   },
   {
      name: "React",
      icon: "/assets/image/icon/react-color.svg"
   },
   {
      name: "Next.js",
      icon: "/assets/image/icon/nextdotjs-color.svg"
   },
   {
      name: "TailwindCSS",
      icon: "/assets/image/icon/tailwindcss-color.svg"
   },
   {
      name: "HTML5",
      icon: "/assets/image/icon/html5-color.svg"
   },
   {
      name: "CSS3",
      icon: "/assets/image/icon/css3-color.svg"
   },
   {
      name: "Amazon Web Service",
      icon: "/assets/image/icon/amazonaws-color.svg"
   }
];

export const RehabDescription = 
 `Integration of web technologies to provide coaching and supervision of rehabilitation exercises, promoting the use of AI and IT technology in stroke rehabilitation.`