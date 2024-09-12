
import { type NextRequest } from "next/server"
import  comments  from "./data"
export async function GET(request:NextRequest) {
    
    const searchParams=request.nextUrl.searchParams
    const query = searchParams.get('query')
    const filteredComments=query?comments.filter((_)=>_.text.includes(query)):comments;
    return  Response.json(filteredComments)
}


export async function POST(request:Request) {
    const data = await request.json()
    const comment = {
        id: comments.length +1,
        text: data.text,
    }
    comments.push(comment)
    console.log(comments)
    return  Response.json(JSON.stringify(comment),{
        headers:{
            'Content-Type': 'application/json',

        },
        status:201,

    }

    )
}