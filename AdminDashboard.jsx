import React from 'react'
import AllTask from '../../other/AllTask'
import CreateTak from '../../other/CreateTak'
import Header from '../../other/Header'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-full p-10'>
    <Header changeUser={props.changeUser} />
    <CreateTak />
    <AllTask />
    </div>
  )
}

export default AdminDashboard
