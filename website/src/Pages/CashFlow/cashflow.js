import React from 'react'
import cash1 from '../../Assets/cash1.jpeg'
import cash2 from '../../Assets/cash2.jpeg'
import cash3 from '../../Assets/cash3.jpeg'
import cash4 from '../../Assets/cash4.jpeg'
import cash5 from '../../Assets/cash5.jpeg'
import cash6 from '../../Assets/cash6.jpeg'
import './cashflow.css'
import Navbar from '../../Components/Navbar/navbar'

export default function CashFlow() {
    return (
        <>
            <Navbar />
            <div className="cash-screen">
                <h1>Cash-Flow</h1>
                <div className="cash-window">
                    <img src={cash1} alt="" />
                    <img src={cash2} alt="" />
                    <img src={cash3} alt="" />
                    <img src={cash4} alt="" />
                    <img src={cash5} alt="" />
                    <img src={cash6} alt="" />

                </div>
            </div>
        </>
    )
}
