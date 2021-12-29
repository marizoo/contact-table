
import React from 'react'

const EditableRow = ({editFormData, onHandleEditFormChange, onHandleCancelClick}) => {
    return (
        <tr>
            <td>
                <input 
                type="text" 
                name="fullName" 
                required="required"
                placeholder="Enter full name..." 
                onChange={onHandleEditFormChange}
                value={editFormData.fullName}
                />   
            </td>     
            <td>
            <input 
                type="text" 
                name="address" 
                required="required"
                placeholder="Enter address..." 
                onChange={onHandleEditFormChange}
                value={editFormData.address}
                /> 
            </td>     
            <td>
            <input 
                type="text" 
                name="phoneNumber" 
                required="required"
                placeholder="Enter phone number..." 
                onChange={onHandleEditFormChange}
                value={editFormData.phoneNumber}
                /> 
            </td>     
            <td>
            <input 
                type="email" 
                name="email" 
                required="required"
                placeholder="Enter email..." 
                onChange={onHandleEditFormChange}
                value={editFormData.email}
                /> 
            </td>     
            <td>
                <button type="submit">Save</button>
                <button type="button" onClick={onHandleCancelClick}>Cancel</button>
            </td>
                
        </tr>
    )
}

export default EditableRow

