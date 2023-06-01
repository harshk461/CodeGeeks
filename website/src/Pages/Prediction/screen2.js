import React, { useState } from 'react'
import './screen.css'
import Loader from '../../Components/Loader/loader'
import Navbar from '../../Components/Navbar/navbar';
export default function Screen2() {
    const [loadingState, setLoadingState] = useState('none');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [imageURL, setImageUrl] = useState('');
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
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
    const handleSelectChange = (event) => {
        setSelectedMonth(event.target.value);
    };
    const handleSelectChangeYear = (event) => {
        setSelectedYear(event.target.value);
    };

    const getMonthlydata = async () => {
        // let load = 'block';
        setLoadingState('block');
        await fetch("http://127.0.0.1:5000/monthly", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "month": months.indexOf(selectedMonth) + 1, "year": 2023 - years.indexOf(selectedYear) })
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
                    <h1>Monthly Sales Prediction</h1>
                    <div className="input-fields">
                        <div>
                            <h1>Input Month</h1>
                            <select value={selectedMonth} onChange={handleSelectChange}>
                                <option value="">Select a month</option>
                                {months.map((month) => (
                                    <option key={month} value={month}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </div>
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
                        <button onClick={getMonthlydata}>Submit</button>
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
