import exp from "express";
import { StudentApp } from "./APIs/StudentAPI.js";
import {connect} from "mongoose"
const app=exp();

async function connectDB(){
    try{
    await connect(mongoDB_URL)
    console.log("database connection sucessfull",err)
    }catch(err){
        console.log("error in connecting the database",err)
    }
}
connectDB();
app.use("student-api/",StudentApp);
app.listen(PORT_NUMBER,()=>console.log("the server is running on port 4000"));
