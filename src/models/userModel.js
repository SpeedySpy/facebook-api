import { PrismaClient } from '@prisma/client';
//import { getPrismaClient } from '@prisma/client/runtime';
//import { response } from 'express';
const prisma = new PrismaClient();
/////////////////////////////////////////////////////////////////////////////


/*export const updateUsersProfile= async (id, firstName,lastName)
  return prisma.profile.update(({
    where:{userId:id},
    data:{firstName,lastName}

  })

  )
  */

  
/////////////////////////////////////////////////////////////////////////////


export const deleteById = async({id}) => {
  return prisma.user.delete({
      where: { id }
  })
}

  /////////////////////////////////////////////////////////////////////////////



  /////////////////////////////////////////////////////////////////////////////

  export const createOne = async ({ email, password }) =>
  prisma.User.create({
    data: {
      email,
      password,
    },
  });
 /////////////////////////////////////////////////////////////////////////////

 export const findByCredentials = ({ email, password }) =>
 prisma.User.findFirst({
   where: {
     email,
     password,
   },
 });

/////////////////////////////////////////////////////////////////////////////








/////////////////////////////////////////////////////////////////////////////////