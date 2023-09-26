import EditDeleteUser from "./EditDeleteUser";
import StarRating from "./StarRating";
import Username from "./Username";


export default function TableRow({ item, deleteUserDetails, bundleHandlers, checkbox, handleCheckbox }) {
    return (
        < >
            <Username 
            handleCheckbox={handleCheckbox}
            checkbox={checkbox}
            item={item} 
            />
            <td>active</td>
            <td>{item.email}</td>
            <td>{item.company.bs}</td>
            <StarRating />
            <EditDeleteUser deleteUserDetails={deleteUserDetails} bundleHandlers={bundleHandlers} item={item} />
        </>
    )
}
