import React from 'react'
import { Link } from 'react-router-dom'

export default function UserCard(props) {
    return (
        <div className=" rounded overflow-hidden shadow-lg flex items-center justify-center p-3">
            <Link to={`/users/${props.user.id}`}>
                <img 
                    className="w-full overflow-hidden object-contain h-50 flex items-center justify-center"
                    src={props.user.image}
                    alt={props.user.name}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        {props.user.name}
                    </div>
                    <p className="text-gray-700 text-base">
                        {props.user.company}
                    </p>
                </div>
                <div className="font-bold text-xl flex p-3 items-center justify-center">
                    ${props.user.phone}
                </div>
                <div className="font-bold text-xl flex p-3 items-center justify-center">
                    {props.user.email}
                </div> 
            </Link> 
        </div>
    )
}