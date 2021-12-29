import React from 'react'

const ReadOnlyRow = ({contact, onHandleEditClick}) => {
    return (
        <tr key={contact.id}>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <button 
                type="button" 
                onClick={(ev) => onHandleEditClick(ev, contact)}
                >
                Edit
                </button>
            </td>
        </tr>
    )
}

export default ReadOnlyRow
