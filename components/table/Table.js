
import Tbody from "./Tbody";
import Thead from "./Thead";

export default function Table({ 
    search, 
    records, 
    deleteUserDetails, 
    bundleHandlers,
    checkbox, 
    handleCheckbox, 
    selectAllCheckbox, 
    handleSelectAllCheckbox
 }) {

    return (
        <table>
            <Thead 
            selectAllCheckbox={selectAllCheckbox}
            handleSelectAllCheckbox={handleSelectAllCheckbox} />
            <Tbody
                handleCheckbox={handleCheckbox}
                checkbox={checkbox}
                search={search}
                records={records}
                deleteUserDetails={deleteUserDetails}
                bundleHandlers={bundleHandlers} />
        </table>
    )
}
