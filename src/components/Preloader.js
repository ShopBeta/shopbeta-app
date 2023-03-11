import React, { Component} from 'react'
import 'tachyons'

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
                            <section className="preloader">
                                <div className="spinner">
                                    <span className="spinner-rotate">
                                        <div className='tc code' style={{color: '#ee9617', fontSize: '27px', fontWeight: '500', letterSpacing: '-1px'}}>Spongebuy</div>
                                    </span>
                                </div>
                            </section>
                        }
                    </div>
                )
    }
      
}


export default Preloader