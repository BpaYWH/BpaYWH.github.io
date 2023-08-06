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

export const CameraSystemDescription = () => {
   return (
      <div className="my-16 w-1/2 h-fit mx-auto">
         <h3 className="text-2xl mb-8">
            Camera
         </h3>

         <div className="flex flex-col gap-4 text-gray-500 text-xl mx-4">
            <p>
               Multiple ceiling cameras monitor an entire swimming lane.
            </p>
            <p>
               Capture the swimmer's movement throughout the swim.
            </p>
            <p>
               Feed the image stream to the analysis system.
            </p>
         </div>
      </div>
   );
}

export const PerformanceAnalysisDescription = () => {
   return (
      <div className="my-16 w-1/2 h-fit mx-auto">
         <h3 className="text-2xl mb-8">
            Performance Analysis
         </h3>

         <div className="flex flex-col gap-4 text-gray-500 text-xl mx-4">
            <p>
               Utilizes computer vision algorithms to detect and analyze the swimmer's body parts.
            </p>
            <p>
               By tracking the swimmer's poses and angles, the system can evaluate their posture.
            </p>
            <p>
               The analysis includes calculations of speed, angle, and distance between body parts.
            </p>
         </div>
      </div>
   )
}

export const FeedbackDescription = () => {
   return (
      <div className="my-16 w-1/2 h-fit mx-auto">
         <h3 className="text-2xl mb-8">
            Feedback
         </h3>

         <div className="flex flex-col gap-4 text-gray-500 text-xl mx-4">
            <p>
               The swimmer's performance metrics, posture, and stroke analysis are displayed on a screen accessible to the user
            </p>
            <p>
               Help swimmers understand their performance, identify areas for improvement, and make adjustments to their technique
            </p>
         </div>
      </div>
   )
}

export const RehabDescription = 
 `Integration of web technologies to provide coaching and supervision of rehabilitation exercises, promoting the use of AI and IT technology in stroke rehabilitation.`