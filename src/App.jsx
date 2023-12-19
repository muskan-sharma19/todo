import React from "react"
import AddToDo from "./AddtoDo";
import ToDoList from "./ToDoList";
import "./App.css";
function App(){
  const [item,setitem]=React.useState([]);
  const handleAddTask =({desc,date}) => {
    if(desc!=='' && date!==''&& desc!==undefined && date!==undefined){
    const temp={
      desc:desc,
      date:date,
      id: Math.random().toString(36).substr(2, 9),
    }
   // temp.unshift({desc:desc,date:date}) 
    setitem([...item,temp]);}
    else {
      alert('please enter a description and a date in fields below')
  }}
  const handleDeleteTask =(val)=>{
const filteredData=item?.filter((i)=>{return i?.id!==val})
setitem(filteredData);
  }
  return(
    <>
<center className="todo-container"><h1>To Do List</h1></center>
<div className="container-text-center">
  <AddToDo handleAddTask={handleAddTask}/>
  <ToDoList addItem={item} handleDeleteTask={handleDeleteTask}/>
 </div>
</>

  )
}
export default App;