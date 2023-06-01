import React, { useState } from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/navbar'
import homeSection from '../../Assets/banking.jpg'
import plug from '../../Assets/plug.png'
import percent from '../../Assets/analytics.png'
import infinity from '../../Assets/infinity.png'
import gift from '../../Assets/giftbox.png'
import { TbCurrencySolana } from 'react-icons/tb'
import replit from '../../Assets/replit.png'
import polygon from '../../Assets/polygon.png'
import dev from '../../Assets/dev.png'
import filecoin from '../../Assets/filecoin.png'
export default function Home() {
    const [date, setDate] = useState('');
    const sales_func = async () => {
        await fetch("http://127.0.0.1:5000/sales", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "date": date })
        }).then(res => res.json())
            .then(data => { console.log(data) })

    }
    return (
        <>
            <Navbar />
            <div className="home-header">
                <section className='home-section1'>
                    <h1>Powerful Accounting Platform for your Business</h1>
                    <h6>InvestIQ  is a comprehensive cloud accounting platform that takes care of your business finance. From core accounting, stock tracking, bank reconciliation, and managing projects, to automating workflows, and keeping your business GST compliant, InvestIQ does it all and more.</h6>
                    <div className="home-section1-button">
                        <button>START MY FREE 14 DAY TRAIL</button>
                        <button>EXPLORE DEMO ACCOUNT</button>
                    </div>
                </section>
                <section className='home-section2'>
                    <img src={homeSection} alt="Home" />
                </section>
            </div>
            <div className="preferred-features">
                <h1 >Why InvestIQ is the preferred accounting software of businesses</h1>
                <div className="feature-box-home">
                    <div className="feature-box">
                        <img src={infinity} alt="infinity" />
                        <h3>End-to-end accounting</h3>
                        <h6>Right from negotiating deals to raising sales orders and invoicing, InvestIQ handles mundane accounting tasks so you can focus on your business.</h6>
                    </div>
                    <div className="feature-box">
                        <img src={percent} alt="infinity" />
                        <h3>GST compliance</h3>
                        <h6>Create GST invoices, know your tax liability, and file your tax returns directly. InvestIQ keeps your business GST compliant.</h6>
                    </div>
                    <div className="feature-box">
                        <img src={plug} alt="infinity" />
                        <h3>Integrated platform</h3>
                        <h6>As your business grows, add more of InvestIQ's 50+ apps to help you manage and run every aspect of your business from wherever you are.</h6>
                    </div>
                </div>
            </div>
            <div className="price-header">
                <h1>Simple and affordable pricing</h1>
                <div className="price-window">
                    <div className="price-box">
                        <div className="price-title">
                            <h2>FREE</h2>
                            <div className="price-underline"></div>
                        </div>

                        <img src={gift} alt="gift" />
                        <button>START NOW</button>
                    </div>
                    <div className="price-box">
                        <div className="price-title">
                            <h2>STANDARD</h2>
                            <div className="price-underline"></div>
                        </div>

                        <div className="price-content">
                            <h1>Rs. 799</h1>
                            <p>/month billed annually
                                ₹899 billed monthly</p>
                        </div>
                        <button>START NOW</button>
                    </div>
                    <div className="price-box">
                        <div className="price-title">
                            <h2>PROFESSIONAL</h2>
                            <div className="price-underline"></div>
                        </div>

                        <div className="price-content">
                            <h1>Rs. 1499</h1>
                            <p>/month billed annually
                                ₹1799 billed monthly</p>
                        </div>
                        <button>START NOW</button>
                    </div>
                    <div className="price-box">
                        <div className="price-title">
                            <h2>PREMIMUN</h2>
                            <div className="price-underline"></div>
                        </div>

                        <div className="price-content">
                            <h1>Rs. 2999</h1>
                            <p>/month billed annually
                                ₹3599 billed monthly</p>
                        </div>
                        <button>START NOW</button>
                    </div>
                    <div className="price-box">
                        <div className="price-title">
                            <h2>ELITE</h2>
                            <div className="price-underline"></div>
                        </div>

                        <div className="price-content">
                            <h1>Rs. 4999</h1>
                            <p>/month billed annually
                                ₹5999 billed monthly</p>
                        </div>
                        <button>START NOW</button>
                    </div>
                    <div className="price-box">
                        <div className="price-title">
                            <h2>ULTIMATE</h2>
                            <div className="price-underline"></div>
                        </div>

                        <div className="price-content">
                            <h1>Rs. 7999</h1>
                            <p>/month billed annually
                                ₹9599 billed monthly</p>
                        </div>
                        <button>START NOW</button>
                    </div>
                </div>
            </div>
            <div className="sponsor-window">
                <h1>Our Sponsors</h1>

                <div className="sponsors">
                    <TbCurrencySolana size={100} />
                    <img src={replit} alt="" />
                    <img src={polygon} alt="" />
                    <img src={dev} alt="" />
                    <img src={filecoin} alt="" />
                </div>

            </div>
        </>
    )
}
