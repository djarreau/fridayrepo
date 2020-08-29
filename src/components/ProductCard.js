import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard(props) {
    return (
        <div className=" rounded overflow-hidden shadow-lg flex items-center justify-center p-3">
            <Link to={`/product/${props.product.id}`}>
                <img 
                    className="w-full overflow-hidden object-contain h-50 flex items-center justify-center"
                    src={props.product.image}
                    alt={props.product.title}
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        {props.product.title}
                    </div>
                    <p className="text-gray-700 text-base">
                        {props.product.description}
                    </p>
                </div>
                <div className="font-bold text-xl flex p-3 items-center justify-center">
                    ${props.product.price}
                </div>
                <div 
                    to={`/products/${props.product.id}`}
                    className="bg-blue-500 text-white p-3 flex items-center justify-center w-30">
                        View
                </div> 
            </Link> 
        </div>
    )
}

export default ProductCard