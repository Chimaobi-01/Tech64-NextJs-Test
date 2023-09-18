import { useState } from "react"


export default function EditModal({ closeModal, bundleHandlers, item }) {
const { handleEmail, handleName, handleRole, handleUsername, editUserDetails} = bundleHandlers
   

    return (
        <>
            <div className="modal-header">
                <h3>Information</h3>
                <span onClick={closeModal}>&times;</span>
            </div>
            <div className="edit-form">
                <div className="user">
                    <label>Name<input onChange={handleName} type="text" /></label>
                    <label>Username<input onChange={handleUsername} type="text" /></label>
                </div>
                <label>Email<input onChange={handleEmail} type="email" /></label>
                <label>Role<input onChange={handleRole} type="text" /></label>
                <div className="save-btn">
                    <input onClick={() => {
                        closeModal()
                        editUserDetails(item.id)
                        }}  type="submit" value='save' />
                </div>
            </div>
        </>
    )
}
