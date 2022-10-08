import React from "react";
import { Link } from 'react-router-dom';
import '../components/simple-line-icons/css/simple-line-icons.css';


export const sidebarData = [

    {
        // Title: 'Home',
        Icon: <Link to={"../"} title="home" className="link black icon-home pv2 f3"></Link>,
        Link: '/assets/Home'
    },
    {
        // Title: 'Adbillboard',
        Icon: <Link to={"../assets/Adbillboard"} title="feed" className="pv2" ><svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="black bi bi-calendar3-range-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2H2zM0 8V3h16v2h-6a1 1 0 1 0 0 2h6v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4h6a1 1 0 1 0 0-2H0z"/>
        </svg></Link>,
        Link: '/assets/Adbillboard'
    },
    {
        // Title: 'Category',
        Icon: <Link to={"../assets/Category"} title="category" className="pv2">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" className="black bi bi-collection" viewBox="0 0 16 16">
        <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"/>
        </svg></Link>,
        Link: '/assets/Category'
    },
    {
        // Title: 'Cart',
        Icon: <Link to={"../assets/Vendor/Cart"} title="cart" className="black link icon-basket f3 pv2"></Link>,
        Link: '/assets/Vendor/Cart'
    },
    {
        // Title: 'inventory',
        Icon: <Link to={"../assets/Inventory"} title="inventory" className="black link icon-diamond f3 pv2"></Link>,
        Link: '/assets/Inventory'
    }
]
