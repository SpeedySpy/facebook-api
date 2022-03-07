import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

/////////////////////////////////////////////////////////////////////////////

export const createOnePost = async ({message, Author}) =>
prisma.post.create({
  data:{
    message, 
    Author :{
        connect:{
              id:Author
  }
}
  }
});
 
///////////////////////////////////////////////////////////////////////////////


export const ListUsersPosts = async(id) => {
  return prisma.post.findMany({
     where:{
        authorId: id
     }
  })
}

////////////////////////////////////////////////////////////////////////////////////


export const returnPostById = async(id) => {
  return prisma.post.findFirst({
     where:{id}
  })
}

////////////////////////////////////////////////////////////////////////

export const ReturnAllPost = async () => {
  return prisma.post.findMany({})
}

/////////////////////////////////////////////////////////////////////////////////

export const updatePost = async({id,message,updatedAt}) => {
  return prisma.post.update({
     where: {id:id},
     data: {
       message,
       updatedAt,
     },
   });
}
//////////////////////////////////////////////////////////////////////
export const DeleteByAuthorId = async (id) => {
  return prisma.post.deleteMany({
     where:{
        id
     }
  })
}


/////////////////////////////////////////////////////////////////////////////
export const DeleteOnePost = async(id) => {
  return prisma.post.delete({
     where:{id}
  })
}

