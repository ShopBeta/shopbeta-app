import React from "react";
import 'tachyons';
import img from '../images/women clothings.jpg';
import img1 from '../images/men clothings.jpg'
import img2 from '../images/phone-vector.jpg'
import img3 from '../images/electronics-app.jpg'
import img4 from '../images/beauty-products.jpg'
import img5 from '../images/bonus-pack.jpg'
import img6 from '../images/shoes.webp'
import img7 from '../images/homes-gardens.jpg'
import img8 from '../images/free-sports.jpg'
import '../components/simple-line-icons/css/simple-line-icons.css';

export const catData = [
    {
        Title: <p className="fw5">Women Fashion</p>,
        Image:  <div style={{width: '300px' }} className="tc"><img src={img} alt="women fashion" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: <p className="fw5">Men Clothing</p>,
        Image:  <div style={{width: '300px' }} className="tc"><img src={img1} alt="men clothing" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: <p className="fw5">Phone and Accessories</p>,
        Image:  <div style={{width: '300px' }} className="tc"><img src={img2} alt="phone and accessories" className="br4 pv1 w-100" width="20px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: <p className="fw5">Consumer Electronics</p>,
        Image:  <div style={{width: '300px' }} className="tc"><img src={img3} alt="consumer electronics" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: <p className="fw5">Home and Garden</p>,
        Image:  <div style={{width: '300px' }} className="tc"><img src={img7} alt="home and garden" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: <p className="fw5">Beauty and Health</p>,
        Image:  <div style={{width: '300px' }} className="tc"><img src={img4} alt="beauty and health" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: <p className="fw5">Shoes </p>,
        Image:  <div style={{width: '300px' }} className="tc"><img src={img6} alt="sport and entertainment" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: <p className="fw5">Sports </p>,
        Image:  <div style={{width: '300px' }} className="tc"><img src={img8} alt="sport and entertainment" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: <p className="fw5">Bonus Bundles</p>,
        Image:  <div style={{width: '300px' }} className="tc"><img src={img5} alt="bonus bondles" className="br4 tc pv1 w-100" width="310px" height="230px"></img></div>,
        Link: 'assets/vendor/MarketPlace'
    }
]
