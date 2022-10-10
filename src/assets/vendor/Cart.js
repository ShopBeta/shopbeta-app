import React from "react";
import '../Home.css';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import CartList from "../../containers/CartList";
import { users } from "../../containers/Users"
import Preloader from "../../components/Preloader";

const Cart = () => {
    return(
        <div className="home">
            <Preloader />
                        <Navbar />
                    <div className="dt dt--fixed">
                        <SideBar />
                        <div className="flex flex-wrap">
                            <h3 className="code fw7 f3 orange ph3">
                                <small className="icon-basket ph2 f3"></small>
                            <small className="ph3 code">64 items</small></h3>
                        <div style={{ overflowY: 'scroll', height: '480px'}} className="pa2">
                                <CartList users={users} />
                            </div>
                        </div>
                    </div>
            </div>
    )
}

export default Cart;