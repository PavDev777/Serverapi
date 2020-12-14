import React from 'react'
import { Redirect } from 'react-router-dom'

const Secretpage = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <div className="jumbotron text-center" >
                <h3>Secret page</h3>
            </div>
        )
    }
    return <Redirect to='/login' />
}
export default Secretpage