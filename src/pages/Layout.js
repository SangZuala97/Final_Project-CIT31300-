import "./Layout.css";
import React, { useState } from "react";
import {Outlet, Link } from "react-router-dom";

const Layout = () => {
    const [isOpen, setISOpen] = useState(false);
    return (
        <>
            <nav className= {`sticky top-0 z-50 shadow-md px-4 py-3 ${isOpen ? "isOpen" : ""}`}>
                <button onClick={() => setISOpen(!isOpen)}>&#8801;</button>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/DisplayCars">Cars</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};
export default Layout;