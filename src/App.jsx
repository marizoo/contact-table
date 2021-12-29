
import React, {useState, Fragment} from 'react'
import './App.css'
import {nanoid} from 'nanoid'
import data from './mock-data.json'
import ReadOnlyRow from './components/ReadOnlyRow'
import EditableRow from './components/EditableRow'

const App = () => {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })

  // FOR THE EDIT BUTTON
  const [editFormData, setEditFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (ev) => {
    ev.preventDefault();

    const fieldName = ev.target.getAttribute('name');
    const fieldValue = ev.target.value;

    const newFormData = {...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  // FOR THE EDIT BUTTON
  const handleEditFormChange = (ev) => {
    ev.preventDefault();

    const fieldName = ev.target.getAttribute('name');
    const fieldValue = ev.target.value;

    const newFormData = {...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
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

  //TO SAVE THE NEW INPUT
  const handleEditFormSubmit = (ev) => {
    ev.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    }

    const newContacts = [...contacts];
  }

  //  START HERE AGAIN

  const handleEditClick = (ev, contact) => {
    ev.preventDefault();
    setEditContactId(contact.id);

  // FOR THE EDIT BUTTON
    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    }
  // FOR THE EDIT BUTTON
    setEditFormData(formValues);
  }

  return (
    <div className='app-container'>
      <form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <Fragment>  
              {editContactId === contact.id
                ?  <EditableRow editFormData={editFormData} onHandleEditFormChange={handleEditFormChange}/>
                : <ReadOnlyRow contact={contact} onHandleEditClick={handleEditClick}/>
              }      
            </Fragment>
          ))}
          
        </tbody>
      </table>
      </form>

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
