import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id , title , image , price ,rating}) {

    const [{basket},dispatch] = useStateValue()

    // console.log("this is basket -> " , basket)

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating:rating,
            }
        })
    }

    return (
        <div className="product pb-5">

            <div className="card">

            <div className="view overlay">
                <img src={image} alt="" className="card-img-top img-fluid" />
                <div>
                <div className="mask rgba-white-slight waves-effect waves-light" />
                </div>
            </div>

            <div className="card-body text-center">

                <div className="grey-text">
                <h5>{title}</h5>
                </div>
                <h5>
          
                </h5>
                <h4 className="font-weight-bold blue-text">
                <strong>{price}</strong>
                </h4>
                <div className="d-block">
                <div className="d-flex justify-content-center py-3 w-50 m-auto">
                {Array(rating)
                .fill()
                .map((key , i) => (
                    <img src="https://cms-assets.tutsplus.com/uploads/users/34/posts/30118/preview_image/star-rating.jpg" className="img-fluid w-25"/>
                ))}
                </div>
                </div>
                <div>
                <button className="btn btn-default btn-md my-0 p waves-effect waves-light"  onClick={addToBasket}>Add to cart
                <i className="fas fa-shopping-cart ml-1"></i>
                </button>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Product
