import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET(request: NextRequest) {
   try {
      const url = request.nextUrl.searchParams.get("url")

      const image = await getImageBase64(url || "")
   
      return NextResponse.json({
        image
      })
   } catch (error) {
      return NextResponse.error()
   }

}

let getImageBase64 = async (url: string) => {
   if (!url) return "Blank";
   if (!url.startsWith("http")) return "Not Http";

   let browser = await puppeteer.launch({headless: 'new'});
   let page = await browser.newPage();
   await page.goto(url);
   let image = await page.screenshot({ encoding: "base64" });
   await browser.close();
   return image;
};
