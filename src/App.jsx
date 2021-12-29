// https://www.youtube.com/watch?v=dYjdzpZv5yc&list=PLaebUsP3fWHuY7LpRHYmst5FFrrMYaaLR&index=5

import React, {useState} from 'react'
import './App.css'
import {nanoid} from 'nanoid'
import data from './mock-data.json'
import ReadOnlyRow from './components/ReadOnlyRow'

const App = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })

  const handleAddFormChange = (ev) => {
    ev.preventDefault();

    const fieldName = ev.target.getAttribute('name');
    const fieldValue = ev.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  const handleAddFormSubmit = (ev) => {
    ev.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    }

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  }

  return (
    <div className='app-container'>
      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <ReadOnlyRow contact={contact}/>
          ))}
          
        </tbody>
      </table>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type="text" name="fullName" required placeholder="Enter full name..." onChange={handleAddFormChange}/>
        <input type="text" name="address" required placeholder="Enter address..." onChange={handleAddFormChange}/>
        <input type="number" name="phoneNumber" required placeholder="Enter phone number..." onChange={handleAddFormChange}/>
        <input type="email" name="email" required placeholder="Enter email..." onChange={handleAddFormChange}/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default App
