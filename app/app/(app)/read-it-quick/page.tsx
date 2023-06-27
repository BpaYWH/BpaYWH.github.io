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
                        <strong>{word.slice(0,Math.floor(word.length / 2))}</strong>
                        {word.slice(Math.floor(word.length / 2)) + " "}
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
   const [text, setText] = useState<string>("");

   const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value)
   }

  return (
    <div>
      ReadItQuick

      <div className="flex mx-4 my-8">
         {/* editor area */}
         <div className="flex-1 border-r border-black px-4">
            <label>
               Editor
            </label>
            <textarea value={text} onChange={handleTextChange} placeholder="Write your text here." className="border-black border rounded-md px-4 py-2 w-full" />
         </div>

         {/* Display area */}
         <div className="flex-1 px-4">
            <label>
               Display
            </label>
            <div className="border-black border rounded-md px-4 py-2">
               <BoldPrefix text={text} />
            </div>
         </div>
      </div>

    </div>
  )
}

export default ReadItQuick