"use client"

import { ChangeEvent, Fragment, KeyboardEvent, useState } from "react";

type BoldPrefixProps = {
   text: string
}

function BoldPrefix({text}: BoldPrefixProps) {
   // Bold each words in text props for the first three characters
   const separatedSentence: string[] = text.split(/\r?\n/);
   const separatedText: string[][] = separatedSentence.map((sentence) => sentence.split(" "));

   return (
      <p className="whitespace-pre-wrap">
         {
            separatedText.map((sentence, id) => (
               <Fragment key={`boldPrefixSentence-${id}`}>
                  {sentence.map((word, id) => (
                     <Fragment key={`boldPrefixWord-${id}`}>
                        <p className="inline font-semibold">{word.slice(0,Math.floor(word.length / 2))}</p>
                        <p className="inline font-light">{word.slice(Math.floor(word.length / 2)) + " "}</p>
                     </Fragment>
                  ))}
                  <br />
               </Fragment>
            ))
         }
      </p>
   )
}

function ReadItQuick() {
   const [text, setText] = useState<string>("Write your text here.");

   const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value)
   }

  return (
    <div>
      <h1 className="text-4xl">
         Read It Quick
      </h1>

      <div className="flex my-8">
         {/* editor area */}
         <div className="flex-1 border-r border-black px-4">
            <label>
               Editor
            </label>
            <textarea contentEditable value={text} onChange={handleTextChange} placeholder="Write your text here." className="px-4 py-2 w-full border border-gray-500 rounded-lg text-lg" />
         </div>

         {/* Display area */}
         <div className="flex-1 px-4">
            <label>
               Display
            </label>
            <div className="px-4 py-2 w-full border border-gray-500 rounded-lg text-lg">
               <BoldPrefix text={text} />
            </div>
         </div>
      </div>

    </div>
  )
}

export default ReadItQuick