import React from 'react'
import './navbar.css'
import { FaBook, FaCashRegister, FaHome, FaMoneyBill, FaMoneyBillWaveAlt, FaMoneyCheck, FaPhoneAlt, FaSearch } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { VscThreeBars } from 'react-icons/vsc'

export default function Navbar() {
    function toggle() {
        const hamburger = document.getElementById('ham');
        const menu = document.getElementById("menu");
        hamburger.addEventListener('click', () => {
            menu.style.display = 'block';
        })
    }
    function backtoNav() {
        const cross = document.getElementById('cross');
        const menu = document.getElementById("menu");
        cross.addEventListener('click', () => {
            menu.style.display = 'none';
        })
    }
    function closeSearchWindow() {
        const search_window = document.getElementById('search-window');
        console.log(search_window.classList.contains('search_hidden'));
        if (search_window.classList.contains('search_hidden')) {
            search_window.classList.remove('search_hidden');
        }
        else {
            search_window.classList.add('search_hidden');
        }
    }
    return (
        <div className="nav2">
            <div className="nav2_active">
                <div className="nav2_left">
                    <a href="/">InvestIQ</a>
                </div>
                <div className="nav2_center">
                    <a href="/" className='nav_underline'>Home</a>
                    <a href="/predict" className='nav_underline'>Prediction</a>
                    <a href="/blog" className='nav_underline'>Blogs</a>
                    <a href="/contact" className='nav_underline'>Contact us</a>
                    <button onClick={closeSearchWindow}>
                        <FaSearch size={30} />
                    </button>
                </div>
                <div className="ham hidden">
                    <button className="hamburger" id='ham' onClick={toggle}>
                        <VscThreeBars size={35} />
                    </button>
                </div>
            </div>

            <div className="menu hidden" id='menu'>
                <div className="top-bar">
                    <ImCross id='cross' onClick={backtoNav} size={30} />
                </div>
                <div className="fields">
                    <a href="/" className='nav_underline'>Home</a>
                    <a href="/service" className='nav_underline'>Services</a>
                    <a href="/blog" className='nav_underline'>Blogs</a>
                    <a href="/contact" className='nav_underline'>Contact us</a>
                </div>
            </div>
            <div className="search-window search_hidden" id='search-window'>
                <button onClick={closeSearchWindow}><ImCross className='cross' /></button>
                <div className="search-grid-boxes">
                    <a href="/" className='search-box-a'>
                        <div className="search-box">
                            <FaHome color='#fff' />
                            <h3>Home</h3>
                        </div>
                    </a>
                    <a href="/contact" className='search-box-a'>
                        <div className="search-box">
                            <FaPhoneAlt color='#fff' />
                            <h3>Contact</h3>
                        </div>
                    </a>
                    <a href="/blog" className='search-box-a'>
                        <div className="search-box">
                            <FaBook color='#fff' />
                            <h3>Blogs</h3>
                        </div>
                    </a>
                    <a href="/predict" className='search-box-a'>
                        <div className="search-box">
                            <FaMoneyBill color='#fff' />
                            <h3>Predictions</h3>
                        </div>
                    </a>
                    <a href="/cashflow" className='search-box-a'>
                        <div className="search-box">
                            <FaCashRegister color='#fff' />
                            <h3 style={{ textAlign: "center" }}>CashFlow Graphs</h3>
                        </div>
                    </a>
                    <a href="/revenue" className='search-box-a'>
                        <div className="search-box">
                            <FaMoneyCheck color='#fff' />
                            <h3>Revenue</h3>
                        </div>
                    </a>
                    <a href="/budget" className='search-box-a'>
                        <div className="search-box">
                            <FaMoneyBillWaveAlt color='#fff' />
                            <h3>Budget</h3>
                        </div>
                    </a>
                </div>
            </div>
            <div className="hover_search_btn hidden">
                <button onClick={closeSearchWindow}><FaSearch size={30} /></button>
            </div>
        </div>
    )
}
