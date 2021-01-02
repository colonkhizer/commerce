import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { useHistory } from 'react-router-dom'

function Subtotal() {
    const history = useHistory()
    const [{basket},dispatch] = useStateValue()
    return (
        <div className="subtotal">
            <CurrencyFormat 
            renderText={(value) => (
                    <>
                    <p>Subtotal ({basket.length} Items): <strong>{value}</strong></p>
                    <div className="d-flex justify-content-between px-2">
                        <div className="custom-control custom-checkbox py-3">
                            <input type="checkbox" className="custom-control-input" id="defaultgiftUnchecked"/>
                            <label className="custom-control-label" htmlFor="defaultgiftUnchecked">This order contains a gift</label>
                        </div>	
                    </div>
                    </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
             />

             <div>
             <button onClick={e => history.push('/payment')} className="btn aqua-gradient btn-block my-3">Proceed to Checkout</button>
             </div>
        </div>
    )
}

export default Subtotal
