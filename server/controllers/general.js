import express from 'express';
import User from "../models/User.js";

export const getUser = async (req, res) => { // req = fetch paramaters and body res = send data to front end or api call
    try {
      // added .id to params
      const { id } = req.params; // try to find the user based on the params of ID from the route
      const user = await User.findById(id); // id comes from the general route of getUser
      res.status(200).json(user);
    } 
    
    catch (error) 
    {
      res.status(404).json({ message: error.message });
    }
  };


