import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended:false}));
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Password",
    database:"Mydb",
    multipleStatements:true
})
app.post('/grades', function(req, res){
    let val=req.body.roll;
    console.log(val);
    let sql1="SELECT grade,course_id FROM grades WHERE roll_no= ?"
    db.query(sql1,[val],(err,data)=>{
        if(err) console.log(err);
        console.log(data);
        res.send(data);
    });
});
app.get('/api/NN',(req,res)=>{
    let sql="SELECT * FROM grades WHERE course_id='NN' AND grade='A '";
    db.query(sql,(err,data)=>{
         if(err) console.log(err);
         console.log(data) 
         res.json(data);
    })
})
app.get('/api/M',(req,res)=>{
    let sql="SELECT SUM,roll_no FROM grades WHERE roll_no LIKE 'CS%";
    db.query(sql,(err,data)=>{
         if(err) console.log(err);
         return res.json(data);
    })
})
app.post('/course', function(req, res){
    let val=req.body.course;
    console.log(val);
    let sql1="SELECT credits,course_id FROM course WHERE course_id=?"
    db.query(sql1,[val],(err,data)=>{
        if(err) console.log(err);
        console.log(data);
        res.send(data);
    });
});
app.listen(3000,()=>{
    console.log('listening on port 3000');
})
/* db.query(sql,val,(err,data)=>{
    if(err) return res.json(err);
    return res.json((data));
   }) */