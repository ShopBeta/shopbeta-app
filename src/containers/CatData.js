import React from "react";
import 'tachyons';
import img1 from '../images/summer-clothes-set_74855-446.avif';
import img2 from '../images/characters-people-holding-multimedia-icons-illustration_53876-32615.avif'
import img3 from '../images/portable-electronics-isometric-icons-illustrated-digital-gadgets-used-daily-life-field-sports-medicine-work-leisure-isolated-vector-illustration_1284-70477.avif'
import img4 from '../images/urban-landscape-with-houses-buildings_1308-126434.avif'
import img5 from '../images/beauty-health-illustration-with-natural-cosmetics-eco-products-skin-treatment-face_2175-13461.avif'
import img6 from '../images/antiquarian-isometric-set-vintage-furniture-striking-clocks-old-books-items-home-interior-isolated_1284-31477.avif'
import img7 from '../images/box-full-sport-equipments_1308-37207.avif'
import img8 from '../images/transport-types-illustrations-set-passenger-car-motorcycle-city-bus-helicopter-plane-rocket_575670-507.avif'
import img9 from '../images/luxury-villa-exterior-modern-country-cottage-with-garage-house-with-glass-facade_33099-931.avif'
import img10 from '../images/online-shopping-internet-shop-isometric-icons-collection-with-goods_88138-429.avif'
import '../components/simple-line-icons/css/simple-line-icons.css';

export const catData = [
    {
        Title:  "Clothing & accessories",
        Image:  <div style={{width: '300px' }} className="tc"><img src={img1} alt="Clothing & accessories" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: "Entertainment",
        Image:  <div style={{width: '300px' }} className="tc"><img src={img2} alt="Entertainment" className="br4 pv1 w-100" width="20px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: "Electronics",
        Image:  <div style={{width: '300px' }} className="tc"><img src={img3} alt="Electronics" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: "Home & garden",
        Image:  <div style={{width: '300px' }} className="tc"><img src={img4} alt="Home & garden" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: "Health & beauty",
        Image:  <div style={{width: '300px' }} className="tc"><img src={img5} alt="Health & beauty" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: "Antique & collectibles",
        Image:  <div style={{width: '300px' }} className="tc"><img src={img6} alt="Antique & collectibles" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: "Sports & outdoors",
        Image:  <div style={{width: '300px' }} className="tc"><img src={img7} alt="Sports & outdoors" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: "Vehicles",
        Image:  <div style={{width: '300px' }} className="tc"><img src={img8} alt="Vehicles" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: "Housing",
        Image:  <div style={{width: '300px' }} className="tc"><img src={img9} alt="Sports & outdoors" className="br4 pv1 w-100" width="310px" height="230px"></img></div>,
        Link: '/assets/vendor/MarketPlace'
    },
    {
        Title: "Miscellaneous",
        Image:  <div style={{width: '300px' }} className="tc"><img src={img10} alt="bonus bondles" className="br4 tc pv1 w-100" width="310px" height="230px"></img></div>,
        Link: 'assets/vendor/MarketPlace'
    }
]
