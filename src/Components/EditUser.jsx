import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const initialValue = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",

}

export const EditUser = () => {
    const { id } = useParams()
    const [user, setUser] = useState(initialValue)
    const usenavigate = useNavigate()

    const onChangeValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        editUser()
    }, [])

    const onSubmitValue = async (e) => {
        e.preventDefault()
        await axios.put("http://localhost:3000/users/" + id, user)
        usenavigate("/allusers")
        alert("User updated successfully")

    }

    const editUser = async () => {
        const response = await axios.get("http://localhost:3000/users/" + id)
        setUser(response.data)
    }

    return (
        <>
            <h2 className='bg-gradient text-bg-dark text-center'>Edit User</h2>
            <form className='m-auto w-50' onSubmit={(e) => onSubmitValue(e)}>
                <div className="mb-3">
                    <label className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => onChangeValue(e)}
                        name='first_name'
                        value={user.first_name}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => onChangeValue(e)}
                        name='last_name'
                        value={user.last_name}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        onChange={(e) => onChangeValue(e)}
                        name='email'
                        value={user.email}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => onChangeValue(e)}
                        name='address'
                        value={user.address}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>


    )
}
