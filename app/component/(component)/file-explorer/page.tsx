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
      <h1>File Explorer</h1>
      <FileExplorer file={myFiles} />
    </div>
  );

}