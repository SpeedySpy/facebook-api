import * as profilesModels from '../models/profilesModels';




export const updateProfiles = async (_request,response) => {
    console.log("Update a user's profile")
    const profileData = _request.body;
    const {id} = _request.params;
    const profile = await profilesModels.updateProfiles({
        firstName: profileData.firstName ,
        lastName: profileData.lastName,
        userId: id
    });
    response.status(201).json(profile);
  }