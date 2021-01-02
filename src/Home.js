import React from 'react'
import './Home.css'
import Product from './Product'


function Home() {
    return (
        <div>

            <div className="view-back intro-2">
                <div className="full-bg-img">
                    <div className="mask rgba-black-strong flex-center">
                    <div className="container">
                        <div className="white-text text-center wow fadeInUp my-custom">
                        <h2 className="fw-600">Welcome to The Store</h2>
                        <h5 className="fw-600">Our Discount Offer Is Live Now</h5>
                        <br />
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2 className="mb-0 fw-600">Our Featured Listings</h2>
                </div>

            </div>
        </div>




        <div className="home">

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 mb-2">
                    <Product title="Basket Ball SUPERB BASS STEREO EARPHONES" price={200} image="https://blog.daraz.com.bd/wp-content/uploads/2019/10/MI-Band-4.jpg" rating={3}/>
                    </div>
                    <div className="col-md-3 mb-2">
                    <Product title="Pack of 12 Dayfresh UHT Milk 1 Ltr" price={80} image="https://static-01.daraz.pk/p/997f0800265681d04cd567830935b636.jpg" rating={4}/>
                    </div>
                    <div className="col-md-3 mb-2">
                    <Product title="Bluetooth Mini Wireless Stereo Headset/Earphone" price={65} image="https://static-01.daraz.pk/p/35aabad289ca828f0e5d561cec8fed0f.jpg" rating={3}/>
                    </div>
                    <div className="col-md-3 mb-2">
                    <Product title="S530 Mini Bluetooth Wireless Stereo" price={120} image="https://static-01.daraz.pk/p/ec6b5f896b06137866f83dbdd38c3d85.jpg" rating={5}/>
                    </div>
                    <div className="col-md-3 mb-2">
                    <Product title="Huawei Nova 7i - 6.4 Full View Display 8GB RAM" price={350} image="https://static-01.daraz.pk/p/ff8d2ba2b2a78f3350693bbbc4cf3680.jpg_200x200q80-product.jpg_.webp" rating={3}/>
                    </div>
                    <div className="col-md-3 mb-2">
                    <Product title="Assal Cooking Oil 1 Ltr X 5 Pouches" price={150} image="https://static-01.daraz.pk/p/mdc/dc119075b8646dc00d6854b63c6a67b5.jpg_200x200q80-product.jpg_.webp" rating={5}/>
                    </div>
                </div>
            </div>

        </div>

        </div>

    )
}

export default Home