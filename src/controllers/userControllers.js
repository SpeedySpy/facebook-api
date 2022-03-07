import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import * as userModel from '../models/userModel';
import * as profilesModels from '../models/profilesModels';
import * as postModels from '../models/postModels';






///////////////////////////////////////////////////////////


export const getUserProfile = async(_request, response) => {
  console.log("Returning a user's profile")
  const id = _request.params.id;
  
  response.json({
    profile: await profilesModels.getUsersProfileById(id)
  })
  
  }
///////////////////////////////////////////////////////////


   export const DeleteUserById = async (request,response) => {
     console.log("Deleting a user by his ID")
    const {id} = request.params;
    await profilesModels.deleteByUserId(id)
    await postModels.DeleteByAuthorId(id)
    await userModel.deleteById(id)
    response.status(200).json({})
}   
///////////////////////////////////////////////////////////

export const DeleteUserId = async(_request, response) => {
  const id = _request.params.id;
  const profile = await profilesModels.deleteByUserId(id)
  response.json({});
  }

///////////////////////////////////////////////////////////



  

