import Tbody from "./Tbody";
import Thead from "./Thead";


export default function Table({ search, records, deleteUserDetails, bundleHandlers }) {
    return (
        <table>
            <Thead />
            <Tbody  search={search} records={records} deleteUserDetails={deleteUserDetails} bundleHandlers={bundleHandlers} />
        </table>
    )
}
