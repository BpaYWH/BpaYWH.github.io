export const LabList: string[]  = [
   "Component",
   "Algorithm",
   "App",
   "Game"
];

type TLabPage = {
   name: string;
   path: string;
   description?: string;
   image?: string;
};

export const LabPageList: {[key: string]: TLabPage[]} = {
   "Component": [
      {
         name: "File Explorer",
         path: "file-explorer",
         description: "File Explorer",
         image: "/assets/image/file-explorer.jpg",
      },
      {
         name: "File Explorer",
         path: "file-explorer",
         description: "File Explorer",
         image: "/assets/image/file-explorer.jpg",
      },
      {
         name: "File Explorer",
         path: "file-explorer",
         description: "File Explorer",
         image: "/assets/image/file-explorer.jpg",
      },
      {
         name: "File Explorer",
         path: "file-explorer",
         description: "File Explorer",
         image: "/assets/image/file-explorer.jpg",
      },
      {
         name: "File Explorer",
         path: "file-explorer",
         description: "File Explorer",
         image: "/assets/image/file-explorer.jpg",
      },
      {
         name: "File Explorer",
         path: "file-explorer",
         description: "File Explorer",
         image: "/assets/image/file-explorer.jpg",
      },
   ],
   "Algorithm": [
      {
         name: "Reverse Linked List",
         path: "reverse-linked-list",
         description: "Reverse Linked List",
         image: "/assets/image/linked-list.jpg",
      },
      {
         name: "File Explorer",
         path: "file-explorer",
         description: "File Explorer",
         image: "/assets/image/file-explorer.jpg",
      }
   ],
   "App": [
      {
         name: "Read It Quick",
         path: "read-it-quick",
         description: "Read It Quick",
         image: "/assets/image/opened-books.jpg",
      }
   ],
   "Game": [
      {
         name: "Aim Trainer",
         path: "aim-training",
         description: "Aim Trainer",
         image: "/assets/image/aim.jpg",
      }
   ]
};
