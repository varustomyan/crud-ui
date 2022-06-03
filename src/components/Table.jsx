import React from 'react';
import Row from './Row';

function Table({ users, setUsers, isEdit }) {

  const maxLength = users.reduce((prev, user) => {
    const nameLength = user.data.name ? user.data.name.length : 0
    const lastNameLength = user.data.lastName ? user.data.lastName.length : 0;
    const emailLength = user.data.email ? user.data.email.length : 0;
    const phoneLength = user.data.phone ? user.data.phone.length : 0;

    return {
      name: Math.max(prev.name, nameLength),
      lastName: Math.max(prev.lastName, lastNameLength),
      email: Math.max(prev.email, emailLength),
      phone: Math.max(prev.phone, phoneLength),
    }

  }, {
    name: 0,
    lastName: 0,
    email: 0,
    phone: 0,
  })

  return (
    <table className='table' >
      <thead>
        <tr>
          <th>№</th>
          <th>name</th>
          <th>last name</th>
          <th>e-mail</th>
          <th>phone</th>
          <th></th>
        </tr>
      </thead>

        {users.filter(user => !!user.data).map(({ data, _id }, index) => {

          return (
            <Row
              id={_id}
              data={data}
              index={index}
              key={index}
              setUsers={setUsers}
              isEdit={isEdit}
              maxLength={maxLength}
            />
          )})
        }
    </table>
  )
}

export default Table