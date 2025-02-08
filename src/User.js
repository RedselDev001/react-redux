import React from 'react'

const User = (props) => {
    const { data } = props

    //============ main return function =============//
    return (
        <div>User
            <h5>Name: <span>{data.name}</span></h5>
            <h5>Age: <span>{data.age}</span></h5>
        </div>

    )
}

export default User