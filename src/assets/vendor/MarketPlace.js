import React from "react";
import '../Home.css';
import Navbar from '../../components/Navbar';
import SideBar from '../../components/SideBar';
import CardList from '../../containers/CardList';
import { users } from '../../containers/Users';
import Scroll from '../../containers/Scroll'; 


const Products = () => {
    return(
        <div className="home">
                        <Navbar />
                    <div className="dt dt--fixed">
                        <SideBar />
                        <div className="flex flex-wrap tc">
                            <h3 className="shop fw6 code f3 ph3 pb2">Products</h3>
                        <Scroll>
                            <CardList users={users} />
                        </Scroll>
                        </div>
                    </div>
            </div>
    )
}

export default Products;