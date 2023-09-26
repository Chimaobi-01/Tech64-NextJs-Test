import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/mini-components/Loading";
import Table from "@/components/table/Table";
import { useState } from "react";
import useSWR from "swr";



export default function Home() {

  const [selectAllCheckbox, setSelectAllCheckbox] = useState(false)
  const [checkbox, setCheckbox] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [search, setSearch] = useState('')
  const [newUserDetail, setNewUserDetail] = useState({
    name: '',
    username: '',
    email: '',
    role: ''
  })
  const handleName = e => setNewUserDetail({ ...newUserDetail, name: e.target.value })
  const handleUsername = e => setNewUserDetail({ ...newUserDetail, username: e.target.value })
  const handleEmail = e => setNewUserDetail({ ...newUserDetail, email: e.target.value })
  const handleRole = e => setNewUserDetail({ ...newUserDetail, role: e.target.value })


  // Fetch data from api route

  // const getApiData = async () => {
  //   const response = await fetch('/api/users')
  //   const data = await response.json()

  //   setUsers(data)
  // }
  // useEffect(() => {
  //   getApiData()
  // }, [])


  const fetcher = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
  }
  const { data, error } = useSWR('data', fetcher)
  
  if (error) return 'An error occured. check your internet settings and try again'
  if (!data) return <Loading />

 



  // // DeleteUser
  const deleteUserDetails = async (userId) => {

  }

  // // EditUsers
  const editUserDetails = async (userId) => {
  
  }

  // // pagination implementation
 
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = data.slice(firstIndex, lastIndex)
  const numberOfPages = Math.ceil(data.length / recordsPerPage)

  const getPrePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const getNextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  // checkboxes functionality
  const handleSelectAllCheckbox = () => {
    setSelectAllCheckbox(!selectAllCheckbox)
    setCheckbox(data.map(box => box.id))
    if (selectAllCheckbox) {
      setCheckbox([])
    }
  }
  const handleCheckbox = (e, id) => {
    const checked = e.target.checked
    setCheckbox([...checkbox, id])
    if (!checked) {
      setCheckbox(checkbox.filter(item => item !== id))
    }
  }




  const bundleHandlers = {
    handleName,
    handleEmail,
    handleRole,
    handleUsername,
    editUserDetails
  }






  return (
    <div className="main">
      <div className="container">
        <Header setSearch={setSearch} />
        <div className="overflow">
          <Table
            search={search}
            records={records}
            deleteUserDetails={deleteUserDetails}
            bundleHandlers={bundleHandlers}
            handleCheckbox={handleCheckbox}
            checkbox={checkbox}
            selectAllCheckbox={selectAllCheckbox}
            handleSelectAllCheckbox={handleSelectAllCheckbox}
          />
        </div>
        <Footer
          getNextPage={getNextPage}
          getPrePage={getPrePage}
          firstIndex={firstIndex}
          lastIndex={lastIndex}
          total={data.length}
        />
      </div>
    </div>
  )
}
