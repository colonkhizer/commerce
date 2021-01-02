import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id , image , title ,price , rating}) {

    const [{basket} , dispatch] = useStateValue()

    const removeFromBasket =()=> {
        //remove the item from the cart
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    

    return (
        <div>
            <div className="media mb-3">
                <img className="d-flex mr-3 img-fluid" src={image} alt="" />
                <div className="media-body">
                <a to="" className="float-right" onClick={removeFromBasket}>
                    <i className="fas fa-times" />
                </a>
                <h4 className="mt-0 font-weight-bold text-primary mb-0">{title}</h4>
                <h5 className="font-weight-bold">${price}</h5>
                {Array(rating)
                .fill()
                .map((_ , i) => (
                    <img src="https://cms-assets.tutsplus.com/uploads/users/34/posts/30118/preview_image/star-rating.jpg" className="img-fluid w-3"/>
                ))}
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
