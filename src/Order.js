import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Order.css'
import { useStateValue } from './StateProvider';

function Order() {

    const [{basket} , dispatch] = useStateValue()

        const emptyBasket = () => {
            //dispatch the item into the data layer
            dispatch({
                type: 'EMPTY_BASKET',
            })
        }

    return (
        <div className="top-order text-center mb-5">
            <h3 className="my-5 fw-500">Thank You For Purchasing the Product</h3>
            <Link to="/">
                <button className="btn btn-default" onClick={emptyBasket}>
                    Continue Shopping
                </button>
            </Link>
        </div>
    )
}

export default Order
