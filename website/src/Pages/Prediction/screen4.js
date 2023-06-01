import React, { useState } from 'react'
import './screen.css'
import Navbar from '../../Components/Navbar/navbar';
import Loader from '../../Components/Loader/loader'

export default function Screen4() {
    const [imageURL, setImageUrl] = useState('');
    const [date1, setDate1] = useState("");
    const [date2, setDate2] = useState("");
    const [loadingState, setLoadingState] = useState('none');
    const getTimeSpanData = async () => {
        setLoadingState("block");
        await fetch("http://127.0.0.1:5000/time-span", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "date1": date1, "date2": date2 })
        })
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setImageUrl(url);
            })

        setLoadingState("none");
    }

    return (
        <>
            <Navbar />
            <div className="screen-container">
                <div className="screen-left">
                    <h1>Time-Span Sales Prediction</h1>
                    <div className="input-fields">
                        <div>
                            <h1>Input Date 1</h1>
                            <input type="date" name='date' value={date1} onChange={(e) => { setDate1(e.target.value) }} required />
                        </div>
                        <div>
                            <h1>Input Date 2</h1>
                            <input type="date" name='date' value={date2} onChange={(e) => { setDate2(e.target.value) }} required />
                        </div>
                        <button onClick={getTimeSpanData}>Submit</button>
                    </div>
                    <div className="result-window">
                        <Loader display={loadingState} />
                        <img src={imageURL} />
                    </div>
                </div>
            </div>
        </>
    )
}
