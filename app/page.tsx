"use client"

import Link from "next/link";
import { Amplify } from "aws-amplify";
import config from "./aws-exports";

Amplify.configure(config);

import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
} from "@aws-amplify/ui-react";

interface DivProps {
  children: React.ReactNode;
  className?: string;
}

const TitleStyle = 
"absolute w-screen top-1/2 -translate-y-1/2 \
text-center text-4xl font-bold \
animate-rise \
";

const SubtitleStyle = "flex flex-col justify-center animate-fade-in";

const pageList = [
  "Component",
  "Algorithm",
  "App",
  "Game"
];

const VerticalCenterDiv = ({children, className}: DivProps) => {
  return (
    <div className={className + " " + SubtitleStyle}>
      {children}
    </div>
  );
}

function Home({ signOut }: any) {
  return (
    <>
    <Button onClick={signOut}>Sign Out</Button>

    <div className={TitleStyle}>
      My Laboratory
    </div>

    <div className="absolute w-screen h-screen text-xl text-center grid grid-cols-2">
      {
        pageList.map((page) => (
          <VerticalCenterDiv key={page} className="">
            <Link href={`/${page.toLowerCase()}`} className="p-16 border">
              {page}
            </Link>
          </VerticalCenterDiv>
        ))
      }
    </div>
    </>
  )
}

export default withAuthenticator(Home);