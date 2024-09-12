import comments from "../data"
import { redirect } from "next/navigation"
export async function GET(request:Request,{params,}:{params:{id:string}}) {
    const id=params.id
    if(parseInt(id)>comments.length) {
        redirect('/comments')
    }
    const comment=comments.find((_)=>_.id===parseInt(id))
    return  Response.json(comment?comment:comments,{
        headers:{
            'Content-Type': 'application/json',
        },
        status:201,
    }

    )
}

export async function DELETE(request:Request,{params,}:{params:{id:string}}) {
    const id=params.id
    const index=comments.findIndex((_)=>_.id===parseInt(id))
    
    // if  (index>=comments.length){return new Response("cant find comment")}
    if(index!==-1){
        comments.splice(index,1)
    return  Response.json(comments,{
        headers:{
            'Content-Type': 'application/json',
        },
        status:201,
    }

    )
}}


export async function PATCH(request:Request,{params,}:{params:{id:string}}) {
    const id=params.id;
    if(parseInt(id)>comments.length) return new Response("comment not found");
    
    const body=await request.json()
    const {text}=body;
    if(id&&text){
    const index=comments.findIndex(comment=>comment.id===parseInt(id))
    comments[index].text=text;
    return  Response.json(comments,{
        headers:{
            'Content-Type': 'application/json',
        },
        status:201,
    },)}
    return new Response("data misssing provide id and data");

    
}

