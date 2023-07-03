import FileExplorer from "./FileExplorer";
import { FileStructure } from "./FileExplorer";

const myFiles: FileStructure = {
  filename: 'root',
  files: [
     {
        filename: 'folder1',
        files: [
           {
              filename: 'folder1-1',
              files: []
           }
        ]
     },
     {
        filename: 'folder2',
        files: [
           {
              filename: 'folder2-1',
              files: [
                 {
                    filename: 'folder2-1-1',
                    files: []
                 },
                 {
                    filename: 'folder2-1-2',
                    files: []
                 }
              ]
           }
        ]
     }
  ]
};

export default function FileExplorerPage() {
   return (
    <div>
      <h1 className="text-3xl font-bold">File Explorer</h1>
      <FileExplorer className="min-h-[500px] my-8 px-4 py-2 border rounded-md" file={myFiles} />
    </div>
  );

}