import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
  const[userData,setUserData]=useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-48'>
      <div className=' mb-3 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5 text-white-500'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 text-white-500'>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 text-white-500'>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 text-white-500'>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 text-white-500'>Failed</h5>
      </div>
      <div className=''>
      {userData.map(function(elem,idx){
          return <div key={idx} className='border-2 border-emerald-500 mb-3 py-2 px-4 flex justify-between rounded'>
          <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
          <h3 className='text-lg font-medium w-1/5 text-blue-500'>{elem.taskCounts.newTask}</h3>
          <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
          <h5 className='text-lg font-medium w-1/5 text-green-500'>{elem.taskCounts.completed}</h5>
          <h5 className='text-lg font-medium w-1/5 text-red-500'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
      </div>
  )
}

export default AllTask
