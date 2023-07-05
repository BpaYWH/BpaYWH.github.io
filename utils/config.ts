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