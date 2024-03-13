import React, { Component} from 'react'
import 'tachyons'
import img from '../assets/images/e-commerce-online.jpg'

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
                        <section style={{backgroundColor: '#FF4747'}} className="preloader bg-red tc">
                            <div style={{fontSize: '27px', fontWeight: '500'}}>
                                <img src={img} alt="logo" className="tc br3" width="80px" height="70px" />
                                <p className='white pv2 tc f4'>E-commerce App</p>
                            </div>
                        </section>
                    }
                </div>
            )
    }
      
}


export default Preloader