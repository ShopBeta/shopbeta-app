import React from "react";
import { Link } from 'react-router-dom';
import '../components/simple-line-icons/css/simple-line-icons.css';


export const sidebarData = [
    {
        Icon: <Link style={{fontSize: '21px'}} to={"#"} title="shuffle items" className="black link icon-shuffle pv2"></Link>,
        Link: '/assets/vendor/Cart'
    },
    {
        Icon: <Link style={{fontSize: '21px'}} to={"../assets/Vendor/Cart"} title="saved items" className="black link icon-heart pv2"></Link>,
        Link: '/assets'
    }
]
