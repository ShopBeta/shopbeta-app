import React from "react";
import 'tachyons'
import '../Home.css'
import img1 from '../../images/network-error-1.png'
import Preloader from "../../components/Preloader";


const BlankPage = () => {

        return(
            <div className="bg-white tc">
                <div className="pa2 pv4">
                <Preloader />
                    <div className="tc">
                        <div className="pa2">
                            <div className="">
                                <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img1} alt="logo" className="tc" width="200px" height="200px" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlankPage;