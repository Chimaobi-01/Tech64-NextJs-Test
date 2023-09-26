export default function DeleteModal({
  closeDeleteModal,
  item,
  deleteUserDetails,
}) {
  const style = {
    del: {
      backgroundColor: "rgb(218, 93, 93)",
      color: "white",
      border: "none",
      borderRadius: ".25rem",
      fontWeight: "bold",
    },
    h3: {
        textAlign: 'center'
    },
  };

  return (
    <>
      <div className="modal-header">
        <span onClick={closeDeleteModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <h3 style={style.h3}>You're about to delete {item.name}'s <br /> account </h3>
      </div>
      <div className="save-btn">
        <input
          onClick={() => {
            deleteUserDetails(item.id);
            closeDeleteModal();
          }}
          type="submit"
          value="Delete"
          style={style.del}
        />
      </div>
    </>
  );
}
