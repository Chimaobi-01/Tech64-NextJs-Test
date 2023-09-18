import DeleteBtn from "./DeleteBtn";
import EditButton from "./EditButton";
import { useState } from "react";


export default function EditDeleteUser({ item, deleteUserDetails, bundleHandlers }) {
    const[editModal, setEditModal] = useState(false)
    const [deleteModal, setDeleteModal] =  useState(false)

    const showModal = () => setEditModal(true)
    const closeModal = () => setEditModal(false)
    const showDeleteModal = () => setDeleteModal(true)
    const closeDeleteModal = () => setDeleteModal(false)

    return (
        <td className="center">
            <div className="edit-users">
                <DeleteBtn 
                deleteModal={deleteModal} 
                showDeleteModal={showDeleteModal} 
                closeDeleteModal={closeDeleteModal}
                deleteUserDetails={deleteUserDetails}
                item={item}
                 />
                <EditButton showModal={showModal} closeModal={closeModal} editModal={editModal} item={item} bundleHandlers={bundleHandlers} />
            </div>
        </td>
    )
}
