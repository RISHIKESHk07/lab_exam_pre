import { useState } from 'react'
import {useEffect} from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [roll, setroll] = useState("");
  const [grades,setgrades] = useState([]);
  const [students,setstudents] = useState([{}]);
  
    
    const handlesubmit =(e)=>{
      e.preventDefault();
      axios.post(`http://localhost:3000/grades`,{roll:roll}).then((response)=>{
        console.log(response.data, typeof (response.data));
        setgrades([...grades,response.data]);
        console.log(grades);
 let sum=0;
 var curent=0;
 var c=0;
 var c1=0;
 const grades_latest =grades.forEach((item)=>{
      curent=0;
      c=0;
      c1=0;
     if(item.grade === 'A') {sum+=10; curent=10}
     if(item.grade === 'B') {sum+=8;curent=8;}
     if(item.grade === 'C') {sum+=6; curent=6;}
     if(item.grade === 'D') {sum+=4; curent=4;}

     axios.post(`http://localhost:3000/course`,{course: item.course_id}).then((response)=>{
      console.log(response.data);
       c=response.data.credits;
       c1=response.data.course_id;

     })
     setstudents([ ...students,{
      credits: (c*curent/10),
      course_id: c1,
 }]);

 });
  console.log(students,grades_latest);
      }).catch((error)=>{console.log(error);});
    }
 
  return (
    <>
     <form onSubmit={handlesubmit}>
      <label htmlFor="roll">Rool_no</label>
      <input type="text" name="roll" onChange={(e)=>{setroll(e.target.value)}}></input>
      <button type="submit" name="submit" value="submit">SUBMIT</button>
     </form>
    </>
  )
}

export default App
