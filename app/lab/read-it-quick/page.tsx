"use client"

import { ChangeEvent, useState } from "react";

import BoldPrefix from "@/components/labPage/bold-prefix";


function ReadItQuick() {
   const [text, setText] = useState<string>("Write your text here.");
   const [textareaHeight, setTextareaHeight] = useState<number>(1);

   const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
   }

  return (
    <div className="px-8 py-8 bg-white">
      <h1 className="text-4xl">
         Read It Quick
      </h1>

      <div id="editor" className="flex my-8">
         {/* editor area */}
         <div className="flex-1 border-r border-black px-4">
            <label>
               Editor
            </label>
            <textarea rows={textareaHeight} value={text} onChange={handleTextChange} placeholder="Write your text here." className="px-4 py-2 w-full border border-gray-500 rounded-lg text-lg overflow-hidden resize-none" />
         </div>

         {/* Display area */}
         <div id="display" className="flex-1 px-4">
            <label>
               Display
            </label>
            <div className="px-4 py-2 w-full border border-gray-500 rounded-lg text-lg">
               <BoldPrefix text={text} setEditorHeight={setTextareaHeight} />
            </div>
         </div>
      </div>

    </div>
  )
}

export default ReadItQuick