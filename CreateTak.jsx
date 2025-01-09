import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);
    const [newTask,setNewTask]=useState({})
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
    const data=userData
    
    data.forEach(function(elem){
        if(assignTo==elem.firstName){
            elem.tasks.push(newTask)
            elem.taskCounts.newTask=elem.taskCounts.newTask+1
        }
    })
    setUserData(data)
    console.log(data)
    //localStorage.setItem('employees', JSON.stringify(data));
    setUserData(data)
    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
};

return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
    <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
        <div className="w-1/2">
        <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} required
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Make a UI design"/>
        </div>
        <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} required
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="date"/>
    </div>
    <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input value={assignTo} onChange={(e) => setAssignTo(e.target.value)} required
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Employee name"/>
    </div>
    <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input value={category} onChange={(e) => setCategory(e.target.value)} required
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400" type="text" placeholder="Design, Development, etc..."/>
        </div>
        </div>

        <div className="w-1/2 flex flex-col items-start">
        <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
        <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}required
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400" placeholder="Describe the task..."></textarea>
        <button type="submit" className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task
        </button>
        </div>
    </form>
    </div>
  );
};

export default CreateTask;
