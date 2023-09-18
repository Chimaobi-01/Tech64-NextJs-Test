import EditDeleteUser from "./EditDeleteUser";
import StarRating from "./StarRating";
import Username from "./Username";


export default function TableRow({ item, deleteUserDetails, bundleHandlers}) {
    return (
        < >
            <Username item={item} />
            <td>active</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <StarRating />
            <EditDeleteUser deleteUserDetails={deleteUserDetails} bundleHandlers={bundleHandlers} item={item} />
        </>
    )
}
