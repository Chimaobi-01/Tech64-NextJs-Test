

export default function DeleteModal({ closeDeleteModal, item, deleteUserDetails, }) {
    const del = {
        backgroundColor: 'rgb(218, 93, 93)',
        color: 'white',
        border: 'none',
        borderRadius: '.25rem',
        fontWeight: 'bold'
    }
   
    return (
        <>
            <div className="modal-header">
                <h3>Delete User Profile</h3>
                <span onClick={closeDeleteModal}>&times;</span>
            </div>
            <div className="save-btn">
                    <input onClick={() => {
                        deleteUserDetails(item.id)
                        closeDeleteModal()
                        }} type="submit" value='Delete' style={del} />
                </div>
        </>
    )
}
