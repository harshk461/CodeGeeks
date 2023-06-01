import React from 'react'
import './predict.css'
import Navbar from '../../Components/Navbar/navbar'
import { FaMoneyBill } from 'react-icons/fa'

export default function Prediction() {

    return (
        <>
            <Navbar />
            <div className="predict-header">
                <h1>Sales Forecasting</h1>
            </div>
            <div className="predict-button">
                <div class="predict-div">
                    <div className="base-div">
                        <h3>Daily Prediction</h3>
                        <FaMoneyBill size={50} color='gold' />
                    </div>
                    <div class="slide slide-left">Get your Daily Predictions</div>
                    <a href="/screen1"><div class="slide slide-right">Click Me.</div></a>
                </div>

                <div class="predict-div">
                    <div className="base-div">
                        <h3>Monthly Prediction</h3>
                        <FaMoneyBill size={50} color='gold' />
                    </div>
                    <div class="slide slide-left">Get your Monthly Predictions</div>
                    <a href="/screen2"><div class="slide slide-right">Click Me.</div></a>
                </div>

                <div class="predict-div">
                    <div className="base-div">
                        <h3>Yearly Prediction</h3>
                        <FaMoneyBill size={50} color='gold' />
                    </div>
                    <div class="slide slide-left">Get your Yearly Predictions</div>
                    <a href="/screen3"><div class="slide slide-right">Click Me.</div></a>
                </div>

                <div class="predict-div">
                    <div className="base-div">
                        <h3>Time Span Prediction</h3>
                        <FaMoneyBill size={50} color='gold' />
                    </div>
                    <div class="slide slide-left">Get your Time Span Predictions</div>
                    <a href="/screen4   "><div class="slide slide-right">Click Me.</div></a>
                </div>
            </div>
            {/* <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div> */}
        </>
    )
}
