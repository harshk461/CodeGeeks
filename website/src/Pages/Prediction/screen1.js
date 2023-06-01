import React, { useState } from 'react'
import './screen.css'
import Loader from '../../Components/Loader/loader'
import Navbar from '../../Components/Navbar/navbar';
export default function Screen1() {
    const [date, setDate] = useState('');
    const [loadingState, setLoadingState] = useState('none');
    const getDailydata = async () => {
        let load = 'block';

        setLoadingState(load);
        document.getElementById("result-id").textContent = "";
        await fetch("http://127.0.0.1:5000/daily", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "date": date })
        })
            .then(res => res.json())
            .then(data => {

                document.getElementById("result-id").textContent = data.result;

            })
        load = 'none';
        setLoadingState(load);
    }
    return (
        <>
            <Navbar />
            <div className="screen-container">
                <div className="screen-left">
                    <h1>Daily Sales Prediction</h1>
                    <div className="input-fields">
                        <div>
                            <h1>Input Date</h1>
                            <input type="date" name='date' value={date} onChange={(e) => { setDate(e.target.value) }} required />
                        </div>
                        <button onClick={getDailydata}>Submit</button>
                    </div>
                    <div className="result-window">
                        <Loader display={loadingState} />
                        <h3 id="result-id"></h3>
                    </div>
                </div>
            </div>
        </>
    )
}
