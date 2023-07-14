import Card from "@/components/general/card";

type TPage = {
   name: string;
   path: string;
   description?: string;
   image?: string;
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

export const WorkPageList: TPage[] = [
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
      image: "/assets/image/Robocoach/Robocoach-Thumbnail.png"
   }
];

export const techStacksList = [

];

const CameraSystemDescription = () => {
   return (
      <ul className="m-4 text-gray-500">
         <li>
            Multiple ceiling cameras monitor an entire swimming lane
         </li>
         <li>
            Capture the swimmer's movement throughout the swim
         </li>
         <li>
            Feed the image stream to the analysis system
         </li>
      </ul>
   );
}

const PerformanceAnalysisDescription = () => {
   return (
      <ul className="m-4 text-gray-500">
         <li>
            Utilizes computer vision algorithms to detect and analyze the swimmer's body parts
         </li>
         <li>
            By tracking the swimmer's poses and angles, the system can evaluate their posture
         </li>
         <li>
            The analysis includes calculations of speed, angle, and distance between body parts
         </li>
      </ul>
   )
}

const RecordReplayDescription = () => {
   return (
      <ul className="m-4 text-gray-500">
         <li>
            The swimmer's performance metrics, posture, and stroke analysis are displayed on a screen accessible to the user
         </li>
         <li>Help swimmers understand their performance, identify areas for improvement, and make adjustments to their technique.</li>
      </ul>
   )
}

const swimmerPerformanceDescription = [
   {
      title: "Camera",
      description: CameraSystemDescription(),
      image: "/assets/image/Swimmer-Performance-Analysis/Description-1.jpeg"
   },
   {
      title: "Performance Analysis",
      description: PerformanceAnalysisDescription(),
      image: "/assets/image/Swimmer-Performance-Analysis/Description-2.jpeg"      
   },
   {
      title: "Feedback",
      description: RecordReplayDescription(),
      image: "/assets/image/Swimmer-Performance-Analysis/Description-3.jpeg"
   }
];

export const SwimmerPerformanceDescriptionCards = swimmerPerformanceDescription.map((item) => (
   <Card
     title={item.title}
     description={item.description}
     imagePath={item.image}
   />
 ));

 export const RehabIntro =
 `A groundbreaking project in stroke rehabilitation: leveraging the power of AI. \n
 Enabling personalized coaching and supervision of rehabilitation exercises. \n
 Empowering patients to continue their recovery journey at home or in elderly centers.
 `

 export const RehabDescription = 
 `Integration of web technologies to provide coaching and supervision of rehabilitation exercises, promoting the use of AI and IT technology in stroke rehabilitation.`