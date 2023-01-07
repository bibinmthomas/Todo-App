import React,{useState} from "react";
import "./App.css";

function App() {

  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(event)=>setTodo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{
          setTodos([...toDos,{id:Date.now(), text:toDo,status:false }])
          setTodo("")
      }} className="fas fa-plus"></i>
      </div>
      { toDos.map((obj,index)=>{
        return(
        <div key={index} className="todos">
        <div className="todo">
          <div className="left">
            <input id={obj.id} onChange={(event)=>{
              console.log(event.target.checked , obj);
              setTodos(toDos.filter(obj2=>{
                if(obj2.id === obj.id){
                  obj2.status= event.target.checked
                }
                return obj2
              }))

            }} value={obj.status} type="checkbox" name="" />
            <p>{ obj.text }</p>
          </div>
          <div className="right">

          <i onClick={(e)=>{
                setTodos(toDos.filter(obj2 => {
                  let temp;
                  if (obj2.id !== obj.id){
                    temp = obj2
                  }
                  return temp;
                }));
              }} className="fas fa-times"></i>

          </div>
        </div>
      </div>
        )
      })
      }
    </div>
  );
}

export default App;
