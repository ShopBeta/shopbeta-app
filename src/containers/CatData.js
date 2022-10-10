import React from "react";
import 'tachyons';
import img from '../images/nike.jpg';
import img1 from '../images/men clothing.jpg'
import img2 from '../images/images-3.jpg'
import img3 from '../images/apple-macbook.jpg'
import '../components/simple-line-icons/css/simple-line-icons.css';

export const catData = [
    {
        Title: <p className="fw5 code">Women Fashion</p>,
        Image:  <div className="tc"><img src={img} alt="shoes" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Icon: <h1><p className="icon-user-female shop pa2 fw5 tc h1"></p></h1>,
        Link: '/assets/vendor/Marketplace'
    },
    {
        Title: <p className="fw5 code">Men Clothing</p>,
        Image:  <div className="tc"><img src={img1} alt="shoes" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Icon: <h1><p className="icon-user shop pa2 fw5 tc h1"></p></h1>,
        Link: '/assets/vendor/Marketplace'
    },
    {
        Title: <p className="fw5 code">Phone and Accessories</p>,
        Image:  <div className="tc"><img src={img2} alt="shoes" className="br4 pv1 w-100" width="20px" height="230px"></img></div>,
        Icon: <h1><p className="icon-screen-smartphone shop pa2 fw5 tc h1"></p></h1>,
        Link: '/assets/vendor/Marketplace'
    },
    {
        Title: <p className="fw5 code">Consumer Electronics</p>,
        Image:  <div className="tc"><img src={img3} alt="shoes" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Icon: <h1><p className="icon-camera shop pa2 fw5 tc h1"></p></h1>,
        Link: '/assets/vendor/Marketplace'
    },
    {
        Title: <p className="fw5 code">Home and Garden</p>,
        Image:  <div className="tc"><img src={img} alt="shoes" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Icon: <h1><p className="icon-support shop pa2 fw5 tc h1"></p></h1>,
        Link: '/assets/vendor/Marketplace'
    },
    {
        Title: <p className="fw5 code">Beauty and Health</p>,
        Image:  <div className="tc"><img src={img} alt="shoes" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Icon: <h1><p className="icon-heart shop pa2 fw5 tc h1"></p></h1>,
        Link: '/assets/vendor/Marketplace'
    },
    {
        Title: <p className="fw5 code">Sports and Entertainment </p>,
        Image:  <div className="tc"><img src={img} alt="shoes" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Icon: <h1><p className="icon-game-controller shop pa2 fw5 tc h1"></p></h1>,
        Link: '/Sports & Entertainment'
    },
    {
        Title: <p className="fw5 code">Bonus Bundles</p>,
        Image:  <div className="tc"><img src={img} alt="shoes" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Icon: <h1><p className="icon-emotsmile shop pa2 fw5 tc h1"></p></h1>,
        Link: '/Bonus Bundles'
    }
]
