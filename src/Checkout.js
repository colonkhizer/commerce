import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider';

function Checkout() {

    const [{basket , user }, dispatch] = useStateValue();

    return (
        <div className="mt-5">
            <div className="container my-5">
  
            <div className="row mt-5">
    
                    <div className="col-md-12 mt-5">
                        <div className="card shopping-cart">
                            <div className="card-body p-4">
                            
                            <div className="row">
                                
                                <div className="col-lg-7">

                                <img className="w-100 pb-4" src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1zdjXNBr0gK0jSZFnXXbRRXXa.jpg_1200x1200.jpg" />
                                
                                <h4 className="py-2 text-center font-weight-bold text-uppercase">Hello , {user?.email}</h4>
                                <h5 className="mb-4 py-2 text-center  fw-600">Your Shopping Basket</h5>
                                

                                {basket.map(item => (
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))}
                                
                                
                                </div>
                            
                                <div className="col-lg-5">
                                <Subtotal/>
                                </div>

                            </div>
                            
                            </div>
                        </div>
                        </div>
                    
                </div>
  
            </div>

        </div>
    )
}

export default Checkout
