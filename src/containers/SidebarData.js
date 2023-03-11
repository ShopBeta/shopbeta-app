import React from "react";
import { Link } from 'react-router-dom';
import '../components/simple-line-icons/css/simple-line-icons.css';


export const sidebarData = [
    {
        // Title: 'Cart',
        Icon: <Link style={{fontSize: '21px'}} to={"../assets/Vendor/Cart"} title="hearts" className="black link icon-heart pv2"></Link>,
        Link: '/assets/vendor/Cart'
    },
    {
        // Title: 'inventory',
        Icon: <Link style={{fontSize: '21px'}} to={"#"} title="gifts" className="black link icon-present pv2"></Link>,
        Link: '/assets'
    }
]
