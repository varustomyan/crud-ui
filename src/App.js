import React, { useState, useEffect } from 'react';
import Table from './components/Table';
import Api from './components/Api/Api.js';
import './App.css';
// import initialState from './fakeData.json';

const App = () => {

  const [users, setUsers] = useState([])
  const [isEdit, setIsEdit] = useState(false)
  
  function addUsers() {
    setUsers([...users, {
      "_id": Date.now(),
      "data": {},
      "__v": 0
    }])
  }
  
  useEffect(() => {

    async function initState() {
      const initialState = await Api.getAllUsers()
      setUsers(initialState)
    }

    initState()
  }, []);

    return (
        <div className="App">
          <Table users={users} setUsers={setUsers} isEdit={isEdit}/>
          <button onClick={() => addUsers()} style={{marginTop: '5px'}}>Add new user</button>
        </div>
    );
  
}

export default App;
