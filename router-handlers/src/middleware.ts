// import { cookies } from "next/headers";
import {type NextRequest,NextResponse } from "next/server";

export function middleware(request:NextRequest){
    const res=NextResponse.next();
    const theme=request.cookies.get("theme");
    
    // const theme=cookies().get("theme");
    if(!theme){
        // cookies().set("theme","dark");
        console.log("no theme")
        res.cookies.set("theme","dark")
    }

    return res;
}