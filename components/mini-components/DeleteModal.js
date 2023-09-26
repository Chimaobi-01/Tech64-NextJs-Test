

export default function DeleteModal({ closeDeleteModal, item, deleteUserDetails, }) {
    const style = {
        del: {
            backgroundColor: 'rgb(218, 93, 93)',
            color: 'white',
            border: 'none',
            borderRadius: '.25rem',
            fontWeight: 'bold'
        },
        h3: {
           
        }
    }
   
    return (
        <>
            <div className="modal-header">
            <span onClick={closeDeleteModal}>&times;</span>
                <h3 style={style.h3}>You're about to delete {item.name} </h3>
                
            </div>
            <div className="save-btn">
                    <input onClick={() => {
                        deleteUserDetails(item.id)
                        closeDeleteModal()
                        }} type="submit" value='Delete' style={style.del} />
                </div>
        </>
    )
}
