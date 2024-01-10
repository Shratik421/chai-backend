//require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../src/constants.js";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb Connection failed", err);
  });

/*
import express from "express"
const app = express();
//better approch in db.index.js
//while connecting database always use async await and try catch block
;(async () => {
    try {
   await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error" , error);
            throw error;
        })
        app.listen(process.env.PORT , ( ) =>{
            console.log(`App i slistening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error " , error)
        throw error;
    }
 } )()

 */
