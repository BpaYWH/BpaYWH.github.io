import {Dispatch, Fragment, SetStateAction, createRef, useEffect} from 'react'

type BoldPrefixProps = {
   text: string
   setEditorHeight: Dispatch<SetStateAction<number>>
}

// Bold each words in text props for the first three characters
function BoldPrefix({text, setEditorHeight}: BoldPrefixProps) {
   const divRef = createRef<HTMLDivElement>();

   const separatedSentence: string[] = text.split(/\r?\n/);
   const separatedText: string[][] = separatedSentence.map((sentence) => sentence.split(" "));

   useEffect(() => {
      if (divRef.current) {
         setEditorHeight(divRef.current.scrollHeight / 28);
      }
      
   }, [divRef]);

   return (
      <div ref={divRef} className="whitespace-pre-wrap">
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
      </div>
   )
}

export default BoldPrefix;