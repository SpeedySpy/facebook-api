import jwt from 'jsonwebtoken';
import * as UserModel from '../models/userModel'
import base64url from 'base64url';
import { PrismaClient } from '@prisma/client';
import { HttpException, HttpStatus } from '../errors/HttpException.error';
const prisma = new PrismaClient();

///////////////////////////////////////////////////////////

export const register = async (request, response) => {
    console.log("Creation of a user");
  const { email, password } = request.body;
  const user = await UserModel.createOne({ email, password });    
  response
  .status(201)
  .json({data:{user} });
}

///////////////////////////////////////////////////////////

export const login = async (request, response) => {
  console.log("Login user");
  const { email, password } = request.body;
  const user = await UserModel.findByCredentials({ email, password });
  if (!user) {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
  const token = jwt.sign({ id: user.id }, 'SECRET');
  response.json({
    data: {
      token,
      user,
    },
  });
}

///////////////////////////////////////////////////////////




 