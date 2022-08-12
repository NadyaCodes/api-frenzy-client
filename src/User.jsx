import UserItem from "./UserItem";
import axios from 'axios'
import { useEffect, useState } from "react";

export default function User() {
  const [ users, setUsers ] = useState([])
  
  useEffect(() => {
    const fetchUsers = async () => {
      axios.get('/users').then((data) => {
        setUsers(data.data)
        console.log(data.data)
      })
    }
    fetchUsers()
  }, [])

  const displayUsers = users.map((user) => {
    return(
      <UserItem key={user.id} name={user.name} email={user.email}/>
    )
  })
  return(
    <article>
      <h2>Random Users</h2>
      <ul>{displayUsers}</ul>
    </article>
  )
}