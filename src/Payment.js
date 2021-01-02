import React , {useState , useEffect} from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link , useHistory } from "react-router-dom"
import { CardElement , useStripe , useElements} from "@stripe/react-stripe-js"
import './Payment.css'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'

function Payment() {
const history = useHistory();

const [{basket , user} , dispatch] = useStateValue()
const stripe = useStripe();
const elements = useElements()

const [succeeded, setSucceeded] = useState(false)
const [processing, setProcessing] = useState("")


const [error, setError] = useState(null)
const [disabled, setDisabled] = useState(true)

const [clientSecret, setClientSecret] = useState(true)

useEffect(() => {
   const getClientSecret = async () => {
    const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100 }`
    });
    setClientSecret(response.data.clientSecret)
   } 
   getClientSecret()
}, [basket])

console.log(clientSecret)

const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret , {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) => {
        setSucceeded(true)
        setError(null)
        setProcessing(false)

        history.replace('/orders')
    })
}

const handleChange = e => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message: "")

}

return (
<div>
   <main className="my-5">
      <div className="container mt-5 wow fadeIn">
         <h2 className="my-5 h2 text-center">Checkout
         </h2>
         <div className="row mt-5">
            <div className="col-md-5  mb-4">
               <div className="card white">
                  <form className="card-body">
                     <div className="row pb-3">
                        <div className="col-md-5">
                           <h5 className="fw-600">Delivery Address</h5>
                        </div>
                        <div className="col-md-7 text-center">
                           <p>{user?.email}</p>
                           <p>Street No10A</p>
                           <p>Downtown , Dubai , UAE</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-md-12 py-3">
                           <h5 className="fw-600">Payment Method</h5>
                        </div>
                     </div>
                     <div className="row">
                            <form className="flex-8 pl-3" onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                                <div className="pl-3 pt-4">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                            <>
                                            <h3>Order Total: {value}</h3>
                                            </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    />
                                </div>
                            </form>
                     </div>

                     <hr className="mb-4" />
                     <Link to="/order">
                     <button className="btn btn-default btn-lg btn-block" type="submit">
                         <span>
                             {processing ? <p>Processing</p> : "Buy Now" }
                         </span>
                     </button>
                     </Link>
                    {error && <div>
                        {error}
                    </div> }
                     
                  </form>
               </div>
            </div>
            <div className="col-md-7 white pt-4">
               <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Your cart</span>
                  <span className="badge badge-default badge-pill">
                     <Link className="text-white" to="/checkout">
                     {basket?.length} Items </Link>
                  </span>
               </h4>
               <div>
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
            </div>
         </div>
      </div>
   </main>
</div>
)
}
export default Payment