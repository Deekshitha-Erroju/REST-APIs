import exp from "express";
export const StudentApp=exp.Router();
//create a new user
StudentApp.post('/students',(req,res)=>{
    res.json({message:"student created"});
});
//read all students
StudentApp.get('/students',(req,res)=>{});
//read students by id
StudentApp.get('/students/:id',(req,res)=>{});
//update student by id
StudentApp.put('/students/:id',(req,res)=>{});
//delete student by id
StudentApp.delete('/students/:id',(req,res)=>{});