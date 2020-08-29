import React from 'react'
import useAxiosGet from '../hooks/HttpRequest'
import Loader from '../components/Loader'
import UserCard from '../components/UserCard'

function Users() {
    const url = `https://5f46c004aaaf9a00161510ef.mockapi.io/api/v1/users`
    
    let users = useAxiosGet(url)

    let content = null

    if(users.error){
        content = <div>
            Please try again.
        </div>
    }
 
    if(users.loading) {
        content = <div>
            <Loader></Loader>
        </div>
    }

    if(users.data){
        content = users.data.map((user, key) =>
            <div key={user.id}>
                <UserCard 
                    user={user} 
                />
            </div>
        )
    }

    return (
        <div>
            <h1 className="font-bold text-xl p-3">Users</h1>
            {content}
        </div>
    )
}

export default Users