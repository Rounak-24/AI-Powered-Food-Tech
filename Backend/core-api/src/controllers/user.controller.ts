import { asyncHandler } from "../utils/asyncHandler.js";
import type { Request, Response } from "express";
import { user } from "../models/user.model.js";
import { item } from "../models/item.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const addFamilyMembers = asyncHandler(async (req:Request, res:Response)=>{
    const {name, ageGroup, gender} = req.body
    const {id} = req.params

    if(!name || !ageGroup || !gender || !id){
        return res.status(400).json(
            new ApiError(400,"All fields are required")
        )
    }

    const newFamilyMember = {
        name:name,
        ageGroup:ageGroup,
        gender:gender,

        dietaryPractices: req.body || null,
        healthStatus: req.body || null 
    }

    const addMember = await user.findByIdAndUpdate(id,{
        $addToSet:{familyMembers:newFamilyMember}
    },{new:true}).select('-passwordHash -refreshToken')

    return res.status(200).json(
        new ApiResponse(200,addMember,"Family member added successfully")
    )
})

export const getUserProfile = asyncHandler(async (req:Request, res:Response)=>{
    
})

export const updateProfile = asyncHandler(async (req:Request, res:Response)=>{

})

export const getInventory = asyncHandler(async (req:Request, res:Response)=>{

})