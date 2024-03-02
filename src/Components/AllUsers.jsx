import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllUsers = () => {

    const [users, setUsers] = useState()

    useEffect(() => {
        onLoadUsers()
    }, [])

    const onLoadUsers = async () => {
        const response = await axios.get("http://localhost:3000/users")
        setUsers(response.data)
    }

    const deleteUser = async (id) => {
        await axios.delete("http://localhost:3000/users/" + id)
        onLoadUsers()
        alert("Are you sure")

    }

    return (
        <>
            <h2 className='bg-gradient text-bg-dark text-center'>All Users</h2>
            <table className="table table-striped table-bordered shadow m-4">
                <thead >
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>
                                    <Link to={`/edituser/${user.id}`}><button className='btn btn-primary margin'>Edit</button></Link>
                                    <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6">No users available</td>
                        </tr>
                    )}
                </tbody>
            </table>

        </>

    )
}

export default AllUsers