import React, {useState} from 'react'
import Api from './Api/Api';

function Row({ data, id, index, setUsers, maxLength }) {

  const [isEdit, setIsEdit] = useState(false)
  const [newData, setNewData] = useState(data)


  async function deleteUser (id) {
    await Api.deleteUser(id)
      .then(() => {
        setUsers((prev) => {
          return [...prev].filter(user => user._id !== id)
        })
      })
      .catch(error => console.log('error', error));
  }
 
  function inputValue(target) {
    setNewData((prev) => {
      return {...prev, [target.name]: target.value}
    })
  }

  async function handleConfirmClick ( newData, id ) {

    await Api.editUser(newData, id)
      .then(res => {
        setUsers(prev => {
          const editListUsers = [...prev]
          editListUsers.splice(index, 1, {...res, 'data': newData})
          console.log(editListUsers)
          return editListUsers
        })
      })
      .catch(error => console.log('error', error));

    setIsEdit(false)
  }
  
  return (
    <tbody>
      <tr className='input'>
        {isEdit 
          ?
          <React.Fragment>
            <td>{index + 1}</td>

            <td>
              <input 
                type="text" 
                className='active' 
                value={newData.name} 
                name='name'     
                size={maxLength.name - 4} 
                onChange={(e) => inputValue(e.target)}
              />
            </td>
            <td>
              <input 
                type="text" 
                className='active' 
                value={newData.lastName} 

                name='lastName' 
                size={maxLength.lastName- 4} 
                onChange={(e) => inputValue(e.target)}
              />
            </td>
            <td>
              <input 
                type="text" 
                className='active' 
                value={newData.email}  
                name='email'  
                size={maxLength.email- 4} 
                onChange={(e) => inputValue(e.target)}
              />
            </td>
            <td>
              <input 
                type="text" 
                className='active' 
                value={newData.phone}  
                name='phone'   
                size={maxLength.phone- 4} 
                onChange={(e) => inputValue(e.target)}
              />
            </td>
            {/* <td>{index + 1}</td>
            <td><input type="text" defaultValue={data.name}     style={{width: `${data.name.length+1}ch`,     minWidth: '100px'}}/></td>
            <td><input type="text" defaultValue={data.lastName} style={{width: `${data.lastName.length+1}ch`, minWidth: '100px'}}/></td>
            <td><input type="text" defaultValue={data.email}    style={{width: `${data.email.length+1}ch`,    minWidth: '100px'}}/></td>
            <td><input type="text" defaultValue={data.phone}    style={{width: `${data.phone.length+1}ch`,    minWidth: '100px'}}/></td> */}
          </React.Fragment>
          :
          <React.Fragment>
            <td>{index + 1}</td>
            {/* <td>jhgmjhgmjmhjmhgmghm</td> */}
            <td><input type="text" value={data.name}    disabled size={maxLength.name - 4}/></td>
            <td><input type="text" value={data.lastName} disabled size={maxLength.lastName- 4}/></td>
            <td><input type="text" value={data.email}    disabled size={maxLength.email- 4} /></td>
            <td><input type="text" value={data.phone}   disabled size={maxLength.phone- 4} /></td>
          </React.Fragment>
        }
        <td>
          {isEdit 
            ?
            <React.Fragment>
              <button onClick={() => handleConfirmClick(newData, id)} style={{marginRight: '5px'}}>confirm</button>
              <button onClick={() => editUser()}>close</button>
            </React.Fragment>
            :
            <React.Fragment>
              <button onClick={() => deleteUser(id)} style={{marginRight: '5px'}}>delete</button>
              <button onClick={() => setIsEdit(prev => !prev)}>edit</button>
              {/* <button onClick={() => console.log(data)}>edit</button> */}
            </React.Fragment>
          }
        </td>
      </tr>
    </tbody>

  )
}

export default Row