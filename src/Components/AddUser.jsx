import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const initialValue = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",

}

export const AddUser = () => {

    const [user, setUser] = useState(initialValue)
    const usenavigate = useNavigate()

    const onChangeValue = (e) => {
        // console.log({ ...user, [e.target.name]: e.target.value })
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onSubmitValue = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3000/users", user)
        usenavigate("/allusers")
        alert("User added successfully")

    }

    return (
        <>
            <h2 className='bg-gradient text-center text-bg-dark'>Add User</h2>
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
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </>


    )
}
