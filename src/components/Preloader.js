import React, { Component} from 'react'
import 'tachyons'
import img from '../images/shopbeta logo.png'

class Preloader extends Component {
    state = {
        preloading:true
    }
    
    componentDidMount() {
        setTimeout(
            () => this.setState(() => ({ preloading: false})),
            1500
        );
    } 
       render() {
            const { preloading } = this.state
            return(
                    <div>
                        { 
                            preloading &&
                            <section className="preloader tc">
                                <div className="spinner">
                                    <span className="spinner-rotate">
                                        <div className='tc code' style={{fontSize: '27px', fontWeight: '500'}}><img src={img} alt="logo" className="br4 tc" width="75px" height="75px" /></div>
                                    </span>
                                </div>
                            </section>
                        }
                    </div>
                )
    }
      
}


export default Preloader