import Card from "@/components/general/card";

type TLabPage = {
   name: string;
   path: string;
   description?: string;
   image?: string;
};

export const LabPageList: TLabPage[] = [
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

const CameraSystemDescription = () => {
   return (
      <ul className="m-4 text-gray-400">
         <li>
            Multiple cameras, are installed on the ceiling of the pool area to monitor an entire swimming lane.
         </li>
         <li>
            These cameras capture images of the swimmer's movements and positions throughout the swim.
         </li>
         <li>
            The images are processed and analyzed by the system to determine the swimmer's speed, acceleration, and other performance metrics.
         </li>
      </ul>
   );
}

const PerformanceAnalysisDescription = () => {
   return (
      <ul className="m-4 text-gray-400">
         <li>The system utilizes computer vision algorithms to detect and analyze the swimmer's body parts, including the arms and legs.</li>
         <li>By tracking the swimmer's poses and angles during different stages of the swim, the system can classify the swimmer's swimming style (e.g., breaststroke, butterfly stroke) and evaluate their posture.</li>
         <li>The analysis includes calculations of speed, angle, and distance between body parts.</li>
      </ul>
   )
}

const RecordReplayDescription = () => {
   return (
      <ul className="m-4 text-gray-400">
         <li>The analyzed information, including the swimmer's performance metrics, posture, and stroke analysis, can be displayed on a screen accessible to the user, such as a coach or the swimmer themselves.</li>
         <li>This feedback helps swimmers understand their performance, identify areas for improvement, and make adjustments to their technique.</li>
      </ul>
   )
}

const swimmerPerformanceDescription = [
   {
      title: "Camera",
      description: CameraSystemDescription(),
      image: "/assets/image/SwimmerPerformanceAnalysis-1.jpg"
   },
   {
      title: "Performance Analysis",
      description: PerformanceAnalysisDescription(),
      image: "/assets/image/SwimmerPerformanceAnalysis-2.jpg"      
   },
   {
      title: "Feedback",
      description: RecordReplayDescription(),
      image: "/assets/image/SwimmerPerformanceAnalysis-3.jpg"
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
 `Development of an AI-powered mobile app to facilitate community rehabilitation for stroke patients, enabling them to continue rehabilitation exercises at home or in elderly centers. \n
Integration of posture analysis and artificial intelligence to provide coaching and supervision of rehabilitation exercises, promoting the use of AI and IT technology in stroke rehabilitation. \n
`