import { PrismaClient } from '@prisma/client';
import * as postModels from '../models/postModels';
const prisma = new PrismaClient();

/////////////////////////////////////////////////////////////////////////////

  
export const createPost = async (request, response) => {
  console.log("Creation of a post");
const {message,Author} = request.body;
const user = await postModels.createOnePost({message,Author});
response
.status(201)
.json({data:{user}});
}
 /////////////////////////////////////////////////////////////////////////////
 
 export const returnPost = async(_request, response) => {
   console.log("Returning a post");
  const id = _request.params.id;
  
  response.json({
    post: await postModels.returnPostById(Number(id))
  })
  }
/////////////////////////////////////////////////////////////////////////////

export const ReturnAllUsersPost = async (_request, response) => {
  console.log("Return all users posts")
  response.json({
    posts: await postModels.ReturnAllPost()
  });
}
  
/////////////////////////////////////////////////////////////////////////////

export const updatePosts = async (_request, response) => {
  console.log("Updating a post")
  const postsData = _request.body;
  const {id} = _request.params;
  
  const posts = await postModels.updatePost({
    id: Number(id),
    message: postsData.message,
    updatedAt: new Date()
  })
  response.json({ posts });
  }

/////////////////////////////////////////////////////////////////////////////

export const getListUsersPosts= async(_request, response) => {
  console.log("Returning a list of a user posts")
  const id = _request.params.id;
  
  response.json({
    post: await postModels.ListUsersPosts(id)
  })
  
  }

//////////////////////////////////////////////////////////////////////////////
export const DeletePost = async (_request, response) => {
  console.log("Deleting a post")
  const {id} = _request.params;
  if(!Number.isInteger(+id)){
    response.json({error: "ID not provided"})
  }else{
   const result = await postModels.DeleteOnePost(Number(id))
   response.json({})
  }
  }

//////////////////////////////////////////////////////////////////////////////