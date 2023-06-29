export const LabList: string[]  = [
   "Component",
   "Algorithm",
   "App",
   "Game"
];

type TLabPage = {
   name: string;
   path: string;
}

export const LabPageList: {[key: string]: TLabPage[]} = {
   "Component": [
      {
         name: "File Explorer",
         path: "file-explorer"
      }
   ],
   "Algorithm": [
      {
         name: "Reverse Linked List",
         path: "reverse-linked-list"
      }
   ],
   "App": [
      {
         name: "Read It Quick",
         path: "read-it-quick"
      }
   ],
   "Game": [
      {
         name: "Aim Trainer",
         path: "aim-training"
      }
   ]
}
