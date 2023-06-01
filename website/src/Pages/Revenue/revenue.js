import React, { useState } from 'react'
import './revenue.css'
import Navbar from '../../Components/Navbar/navbar'
import { FcMoneyTransfer } from 'react-icons/fc';

export default function Revenue() {
    const [revenue, setRevenue] = useState('---');
    const [profit, setprofit] = useState('---');
    const [profit_margin, setprofit_margin] = useState('---');
    const [average_sales, setaverage_sales] = useState('---');
    const [average_profit, setaverage_profit] = useState('---');
    const [discount_rate, setdiscount_rate] = useState('---');
    const [gross_profit, setgross_profit] = useState('---');
    const [gross_profit_margin, setgross_profit_margin] = useState('---');

    const loadData = async () => {
        await fetch("http://127.0.0.1:5000/finance")
            .then(res => res.json())
            .then(data => {
                setRevenue(data['revenue']);
                setprofit(data['profit']);
                setprofit_margin(data['profit margin']);
                setaverage_sales(data['Average Sales per Order']);
                setaverage_profit(data['Average Profit per Order']);
                setdiscount_rate(data['Discount Rate']);
                setgross_profit(data['Gross Profit']);
                setgross_profit_margin(data['Gross Profit Margin']);
            })
    }
    return (
        <>
            <Navbar />
            <div className="revenue-screen">
                <h1>Revenue Report</h1>
                <button onClick={loadData}>Load Data</button>
                <div className="revenue-fields">
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>Rs. {revenue}</h1>
                        <h3>Revenue</h3>
                    </div>
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>Rs. {profit}</h1>
                        <h3>Profit</h3>
                    </div>
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>Rs. {profit_margin}</h1>
                        <h3>Profit Margin</h3>
                    </div>
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>Rs. {average_sales}</h1>
                        <h3>Average Sales</h3>
                    </div>
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>Rs. {average_profit}</h1>
                        <h3>Average Profit</h3>
                    </div>
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>{discount_rate}</h1>
                        <h3>Discount Rate</h3>
                    </div>
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>Rs. {gross_profit}</h1>
                        <h3>Gross Profit</h3>
                    </div>
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>Rs. {gross_profit_margin}</h1>
                        <h3>Gross Profit Margin</h3>
                    </div>

                </div>
            </div>
        </>
    )
}
