import React, { useEffect, useState } from 'react'
import '../Revenue/revenue.css'
import Navbar from '../../Components/Navbar/navbar'
import { FcMoneyTransfer } from 'react-icons/fc';

export default function Revenue() {
    const [isLoading, setLoading] = useState(true);
    const [debt, setdebt] = useState('---');
    const [expense, setexpense] = useState('---');
    const [income, setincome] = useState('---');
    const [invest, setinvest] = useState('---');


    const loadData = async () => {
        await fetch("http://127.0.0.1:5000/budget")
            .then(res => res.json())
            .then(data => {
                setdebt(data['Debt'])
                setexpense(data['Expense'])
                setincome(data['Income'])
                setinvest(data['Investment'])
            })
    }
    return (
        <>
            <Navbar />
            <div className="revenue-screen">
                <h1>Budget Report</h1>
                <button onClick={loadData}>Load Data</button>
                <div className="revenue-fields">
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>{debt}</h1>
                        <h3>Debt</h3>
                    </div>
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>{expense}</h1>
                        <h3>Expense</h3>
                    </div>
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>{income}</h1>
                        <h3>Income</h3>
                    </div>
                    <div className="revenue-box">
                        <FcMoneyTransfer size={80} />
                        <h1>{invest}</h1>
                        <h3>Investment</h3>
                    </div>
                </div>
            </div>
        </>
    )
}
