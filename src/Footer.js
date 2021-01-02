import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <footer className="default-color text-center font-smalL">
               
                <div className="footer-copyright py-4">
                    © { new Date().getFullYear()} Copyright:
                    <a href="https://findkhizer.blogspot.com" className="text-white"> Syed Khizer</a>
                </div>

            </footer>

        </div>
    )
}

export default Footer
