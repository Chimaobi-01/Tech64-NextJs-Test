import TableRow from "../mini-components/TableRow";


export default function Tbody({ search, records, deleteUserDetails, bundleHandlers, checkbox, handleCheckbox }) {



  return (
    <tbody>
        {
          records.filter((item) => {
            return (
              search.toLowerCase() === ''
              ? item
              : item.name.toLocaleLowerCase().includes(search)
            )
          }).map((item) => <tr key={item.id} >
            <TableRow 
            handleCheckbox={handleCheckbox}
            checkbox={checkbox}
            deleteUserDetails={deleteUserDetails} 
            bundleHandlers={bundleHandlers} 
            item={item} />
            </tr>)
        }
  </tbody>
  )
}
