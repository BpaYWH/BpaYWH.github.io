import { draftMode } from "next/headers";

export async function GET(request: Request) {
   draftMode().enable();
   return new Response("Draft Mode is enabled");
}
