import React, { useState } from 'react'
import './screen.css'
import Loader from '../../Components/Loader/loader'
import Navbar from '../../Components/Navbar/navbar';
export default function Screen3() {
    const [loadingState, setLoadingState] = useState('none');
    const [selectedYear, setSelectedYear] = useState('');
    const [imageURL, setImageUrl] = useState('');
    const years = [
        "2023",
        "2022",
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016"
    ];
    const handleSelectChangeYear = (event) => {
        setSelectedYear(event.target.value);
    };
    const getDailydata = async () => {
        // let load = 'block';

        setLoadingState('block');
        await fetch("http://127.0.0.1:5000/yearly", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "year": 2023 - years.indexOf(selectedYear) })
        })
            .then(res => res.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob);
                setImageUrl(url);
            })
        // load = 'none';
        setLoadingState('none');
    }
    return (
        <>
            <Navbar />
            <div className="screen-container">
                <div className="screen-left">
                    <h1>Daily Sales Prediction</h1>
                    <div className="input-fields">
                        <div>
                            <h1>Input Year</h1>
                            <select value={selectedYear} onChange={handleSelectChangeYear}>
                                <option value="">Select a Year</option>
                                {years.map((month) => (
                                    <option key={month} value={month}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button onClick={getDailydata}>Submit</button>
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
