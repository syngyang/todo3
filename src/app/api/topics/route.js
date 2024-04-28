import connectionDB from '@/lib/Connection';
import Topic from '@/models/topic';
import { NextResponse } from 'next/server';

export const POST = async (request)=>{
  const {title, description} = await request.json();
  console.log("request: ",request, "title", title)
  await connectionDB();
  await Topic.create({title, description})
  
  return NextResponse.json({ message: "Topic Created"}, {status:200})
}

export const GET = async ()=>{
  await connectionDB();
  const topics = await Topic.find();
    console.log("topics : ", topics)
  return NextResponse.json({topics});
}

export const DELETE = async (request)=> {
  const id = request.nextUrl.searchParams.get("id");
  await connectionDB();
  await Topic.findByIdAndDelete(id);

  return NextResponse.json({message: "Topic deleted"}, {status: 200})
}