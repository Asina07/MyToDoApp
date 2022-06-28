import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [toDOs,setToDos]=useState([])   //set empty array coz here we neeed list of todo items
  const [toDo, setToDo] = useState('')   //for input text as string

  const deleteTask = (obj)=>{
    var ask = window.confirm("Are you sure, Do you want o delete task");
    if (ask){
      const test = [...toDOs];
      test.splice(obj,1);
      setToDos(test)
    }else{
      console.log("dont delete")
    }
  }



  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop,it's yur Day baeyy </h2>
      </div>
      <div className="input">
        <input  value = {toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDOs,  { id: Date.now() ,text: toDo, status : false}])} className="fas fa-plus"></i>
                                                    {/* here ^ set input text as object.  coz we need to add status and date */}
      </div>


      {/*--------------------------------------------display List of Tasks-------------------------------------------- */}

      <div className="todos"> 
      { toDOs.map((obj)=>{
        return(
        <div className="todo"> 
          <div className="left">
            <input onChange={(e)=>{setToDos(toDOs.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))

            }}
             value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i onClick={()=>deleteTask(obj)} className="fas fa-times"></i>
          </div>
        </div>
          )
        }) 
        }
        <h1 style={{color:'green', marginTop:'60px'}}>Hurray!! done </h1>
         {/*-----------------------------------------Display Active Task---------------------------------------------  */}
        {toDOs.map((obj)=>{
          if(obj.status){
            return(
                <h1> {obj.text}</h1>
            )
          }
          return null

        })}
      </div>
    </div>
  );
}

export default App;
