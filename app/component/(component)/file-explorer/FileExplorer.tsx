"use client"
import { useState } from "react";

export type FileStructure = {
   filename: string,
   files: FileStructure[]
};

type FileExplorerProps = {
   file:  FileStructure
};

export default function FileExplorer({file} : FileExplorerProps) {
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      <ul className="w-fit">
         <li className="flex gap-2 hover:bg-cyan-200">
            {
               file.files && file.files.length > 0 &&
               <button onClick={() => setIsExpanded(!isExpanded)}>
                  {isExpanded ? '-' : '+'}
               </button>
            }
            <button onClick={() => setIsExpanded(!isExpanded)} disabled={!(file.files && file.files.length > 0)}>
               {file.filename}
            </button>
         </li>
         {
            file.files && file.files.length > 0 &&
            file.files.map((nextFile) => (
               <li key={nextFile.filename} className={`pl-4 ${!isExpanded && 'hidden'}`}>
                  <FileExplorer file={nextFile} />
               </li>
            ))
         }
      </ul>
   )
} 