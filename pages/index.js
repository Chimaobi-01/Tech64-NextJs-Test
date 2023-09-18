import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Table from "@/components/table/Table";
import { useEffect, useState } from "react";



export default function Home() {
  const [fetchedData, setFetchedData] = useState([])

  const fetchApiData = async () => {
    const response = await fetch('/api/users')
    const data = await response.json()
    setFetchedData(data)
    console.log('fetched data from api');
  }
  useEffect(() => {
    fetchApiData()
  }, [])

  // DeleteUser
  const deleteUserDetails = async (userId) => {
    const response = await fetch(`/api/users/${userId}`, {
      method: 'DELETE',
    })
    const data = await response.json()
    fetchApiData()
  }


  // EditUsers
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
  const editUserDetails = async (userId) => {
    const response = await fetch(`api/users/${userId}`, {
      method: 'POST',
      body: JSON.stringify({newUserDetail}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()
    fetchApiData()
  }
  const bundleHandlers = {
    handleName,
    handleEmail,
    handleRole,
    handleUsername,
    editUserDetails
  }


  // search implementation
  const [search, setSearch] = useState('')

  // pagination implementation
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 5
  const lastIndex = currentPage * recordsPerPage
  const firstIndex = lastIndex - recordsPerPage
  const records = fetchedData.slice(firstIndex, lastIndex)
  const numberOfPages = Math.ceil(fetchedData.length / recordsPerPage)

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

  return (
    <div className="main">
      <div className="container">
        <Header setSearch={setSearch} />
        <div className="overflow">
          <Table search={search} records={records} deleteUserDetails={deleteUserDetails} bundleHandlers={bundleHandlers} />
        </div>
        <Footer
          getNextPage={getNextPage}
          getPrePage={getPrePage}
          firstIndex={firstIndex}
          lastIndex={lastIndex}
          total={fetchedData.length}
        />
      </div>
    </div>
  )
}
