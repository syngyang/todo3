import connectionDB from '@/lib/Connection'
import Topic from '@/models/topic';
import { NextResponse } from 'next/server';


export const PUT = async(request, {params})=> {
  const {id} = params;
  const {newTitle : title, newDescription: description} = await request.json();
  console.log("params: ", params, "newTitle: ", newTitle, "newDescription: ", newDescription)
  await connectionDB();
  await Topic.findByIdAndUpdate(id, {title, description})

  return NextResponse.json({message: "Topic updated"}, {status: 200})
}