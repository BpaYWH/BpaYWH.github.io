"use client"
import { useState } from "react";

export type FileStructure = {
   filename: string,
   files: FileStructure[]
};

interface Props extends React.ComponentProps<any> {
   file:  FileStructure

}

export default function FileExplorer({file, className} : Props) {
   const [isExpanded, setIsExpanded] = useState(false);

   return (
      <div className={className}>
         <ul className="w-fit">
            <li className="w-fit flex gap-2 px-2 py-1 rounded-md hover:bg-cyan-200">
               <button onClick={() => setIsExpanded(!isExpanded)} disabled={!(file.files && file.files.length > 0)}>
                  {(file.files && file.files.length > 0) ? isExpanded ? '- ' : '+ ' : ""}
                  {file.filename}
               </button>
            </li>
            {
               file.files && file.files.length > 0 &&
               file.files.map((nextFile) => (
                  <li key={nextFile.filename} className={`pl-4 ${!isExpanded && 'hidden'} list-none`}>
                     <FileExplorer file={nextFile} />
                  </li>
               ))
            }
         </ul>
      </div>
   )
} 